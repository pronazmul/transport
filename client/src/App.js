import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
