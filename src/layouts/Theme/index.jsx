import useTheme from './../../shared/hooks/useTheme'

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => {
  const isDark = useTheme()
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return <>{children}</>
}

export default Theme
