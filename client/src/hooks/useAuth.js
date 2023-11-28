import { useSelector } from 'react-redux'

const useAuth = () => {
  const auth = useSelector((state) => state.auth)
  console.log({ auth })
  if (auth?.user?.user?._id) {
    return true
  } else {
    return false
  }
}

export default useAuth
