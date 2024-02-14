import React from 'react'
import { useDispatch } from 'react-redux'
import { useLoggedInInfoQuery } from './../../store/auth/authApi'
import { setTheme } from './../../store/global/globalSlice'

const useAuthCheck = () => {
  const dispatch = useDispatch()
  const [authCheck, setAuthCheck] = React.useState(false)
  const { data, isError } = useLoggedInInfoQuery()

  // Set Theme To Store
  const isDark =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  if (isDark) {
    dispatch(setTheme('dark'))
  } else {
    dispatch(setTheme('light'))
  }

  React.useEffect(() => {
    if (data?.data?._id) setAuthCheck(true)
    if (isError) setAuthCheck(true)
  }, [data, isError])

  return authCheck
}

export default useAuthCheck
