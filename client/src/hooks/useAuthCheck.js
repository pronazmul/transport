import React from 'react'
import { useDispatch } from 'react-redux'
import { userLoggedIn } from '../features/auth/authSlice'

const useAuthCheck = () => {
  const dispatch = useDispatch()
  const [authCheck, setAuthCheck] = React.useState(false)

  // Set Theme To Store
  //   const isDark =
  //     localStorage.theme === 'dark' ||
  //     (!('theme' in localStorage) &&
  //       window.matchMedia('(prefers-color-scheme: dark)').matches)

  //   if (isDark) {
  //     dispatch(setTheme('dark'))
  //   } else {
  //     dispatch(setTheme('light'))
  //   }

  React.useEffect(() => {
    let auth = JSON.parse(localStorage.getItem('auth'))
    if (auth?.user?._id) dispatch(userLoggedIn(auth))
    setAuthCheck(true)
  }, [])

  return authCheck
}

export default useAuthCheck
