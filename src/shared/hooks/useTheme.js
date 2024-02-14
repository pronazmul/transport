import { useSelector } from 'react-redux'

const useTheme = () => {
  const { theme } = useSelector((state) => state.global)
  if (theme === 'dark') {
    return true
  } else {
    return false
  }
}

export default useTheme
