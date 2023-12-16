import React, { useState } from 'react'

import {
  Cog6ToothIcon,
  Squares2X2Icon,
  UsersIcon,
  WindowIcon,
} from '@heroicons/react/24/outline'
import { MobileSidebar } from './MobileSidebar'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const navigation = [
  { name: 'Dashboard', href: '#', icon: Squares2X2Icon, current: true },
  { name: 'Environments', href: '#', icon: WindowIcon, current: false },
  { name: 'Teams', href: '#', icon: UsersIcon, current: false },
  { name: 'Admin', href: '#', icon: Cog6ToothIcon, current: false },
]

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigation}
        />

        {/* Static sidebar for desktop */}
        <Sidebar navigation={navigation} />

        <div className='lg:pl-72'>
          <Navbar setSidebarOpen={setSidebarOpen} />

          <main className='py-10'>
            <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
