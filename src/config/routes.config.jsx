import { Routes } from '../shared/constants/routes.constant'
import NotFound from '../pages/NotFound'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/auth/Login'
import Users from '../pages/Users'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import Feeds from '../pages/Feeds'

export const RoutesConfig = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: Routes.home, element: <Home /> },
      { path: Routes.users, element: <Users /> },
      { path: Routes.categories, element: <Categories /> },
      { path: Routes.feeds, element: <Feeds /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: Routes.login, element: <Login /> }],
  },
  { path: Routes.notFound, element: <NotFound /> },
]
