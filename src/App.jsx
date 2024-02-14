import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutesConfig } from './config/routes.config'
import Theme from './layouts/Theme'
import useAuthCheck from './shared/hooks/useAuthCheck'
import Loader from './shared/components/Loader'

function App() {
  const router = createBrowserRouter(RoutesConfig)

  // Check User Authentication using auth token if exists store on
  const authCheck = useAuthCheck()
  if (!authCheck) return <Loader />

  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
