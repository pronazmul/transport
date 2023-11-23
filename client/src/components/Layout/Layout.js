import React, { useState } from 'react'

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { MobileSidebar } from './MobileSidebar'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
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
          teams={teams}
        />

        {/* Static sidebar for desktop */}
        <Sidebar navigation={navigation} teams={teams} />

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
