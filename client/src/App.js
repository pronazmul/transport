import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Nav from './components/Nav'
import Discover from './pages/Discover'
import EditProfilePage from './pages/EditProfilePage'
import Home from './pages/Home'
import Login from './pages/Login'
import MessagesPage from './pages/Messages/MessagesPage'
import Notifications from './pages/Notifications'
import PostAnalytics from './pages/PostAnalytics'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Search from './pages/Search'
import Settings from './pages/Settings'
import SinglePostView from './pages/SinglePostView'
import Subscriptions from './pages/Subscriptions'
import Users from './pages/Users'
import VideoStudioPage from './pages/VideoStudio/VideoStudioPage'
import SingleVideo from './pages/watch/SingleVideo'
import Watch from './pages/watch/Watch'
import useAuthCheck from './hooks/useAuthCheck'
import Loader from './components/ui/Loader'
import PrivateRoute from './AuthRoutes/PrivateRoute'
import PublicRoute from './AuthRoutes/PublicRoute'

const Wrapper = ({ children }) => {
  const location = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

function App() {
  const authCheck = useAuthCheck()
  return !authCheck ? (
    <Loader />
  ) : (
    <>
      <Nav />
      <Wrapper>
        <Routes>
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/posts/:id'
            element={
              <PrivateRoute>
                <SinglePostView />
              </PrivateRoute>
            }
          />
          <Route
            path='/studio/:id'
            element={
              <PrivateRoute>
                <VideoStudioPage isLoggedIn={true} />
              </PrivateRoute>
            }
          />
          <Route
            path='/settings'
            element={
              <PrivateRoute>
                <Settings isLoggedIn={true} />
              </PrivateRoute>
            }
          />
          <Route
            path='/account'
            element={
              <PrivateRoute>
                <Profile isLoggedIn={true} />
              </PrivateRoute>
            }
          />
          <Route
            path='/users/:id'
            element={
              <PrivateRoute>
                <Users isLoggedIn={true} />
              </PrivateRoute>
            }
          />
          <Route
            path='/discover'
            element={
              <PrivateRoute>
                <Discover isLoggedIn={true} />
              </PrivateRoute>
            }
          />
          <Route
            path='/notifications'
            element={
              <PrivateRoute>
                <Notifications isLoggedIn={true} />
              </PrivateRoute>
            }
          />
          <Route
            path='/subscription'
            element={
              <PrivateRoute>
                <Subscriptions isLoggedIn={true} />
              </PrivateRoute>
            }
          />
          <Route
            path='/messages'
            element={
              <PrivateRoute>
                <MessagesPage isLoggedIn={true} />
              </PrivateRoute>
            }
          />
          <Route
            path='/analytics'
            element={
              <PrivateRoute>
                <PostAnalytics isLoggedIn={true} />
              </PrivateRoute>
            }
          />

          <Route
            path='/edit'
            element={
              <PrivateRoute>
                <EditProfilePage isLoggedIn={true} />
              </PrivateRoute>
            }
          />

          <Route path='/search' element={<Search />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/watch/:id' element={<SingleVideo />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </Wrapper>
    </>
  )
}

export default App
