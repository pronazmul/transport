import SidebarHeader from './SidebarHeader'
import SidebarList from './SidebarList'
import SidebarFooter from './SidebarFooter'
import { menuTree } from './../../../../shared/constants/menu.constant'

const Sidebar = () => {
  return (
    <div className='sidebar-panel'>
      <div className='flex h-full grow flex-col bg-white pl-4 dark:bg-navy-750'>
        {/* Sidebar Panel Header */}
        <SidebarHeader />
        {/* Sidebar Panel Body */}
        <SidebarList data={menuTree} />
        {/* Sidebar Footer */}
        <SidebarFooter />
      </div>
    </div>
  )
}

export default Sidebar
