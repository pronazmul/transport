import { useSelector, useDispatch } from 'react-redux'
import {
  setTheme,
  sidebarToggled,
} from './../../../../store/global/globalSlice'
import useTheme from './../../../../shared/hooks/useTheme'
import { Icon } from '@iconify/react'

const Header = () => {
  const dispatch = useDispatch()
  const { sidebarExpanded } = useSelector((state) => state.global)
  const isDark = useTheme()

  const darkModeToggler = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light')
      dispatch(setTheme('light'))
    } else {
      localStorage.setItem('theme', 'dark')
      dispatch(setTheme('dark'))
    }
  }

  return (
    <div className='header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden'>
      {/* Header Items */}
      <div className='flex w-full items-center justify-between'>
        {/* Left: Sidebar Toggle Button */}
        <div className='h-7 w-7'>
          <button
            className={`menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80 ${
              sidebarExpanded && 'active'
            }`}
            onClick={() => dispatch(sidebarToggled())}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Right: Header buttons */}
        <div className='-mr-1.5 flex items-center space-x-2'>
          {/* Mobile Search Toggle */}
          <button
            // @click="$store.global.isSearchbarActive = !$store.global.isSearchbarActive"
            className='btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5.5 w-5.5 text-slate-500 dark:text-navy-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='1.5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>

          {/* Main Searchbar */}
          <template className='hidden sm:block'>
            <div className='relative mr-4 flex h-8'>
              <input
                placeholder='Search here...'
                className={`form-input peer h-full  rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900 focus:w-80 w-60 transition-all duration-300`}
              />
              <div className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
                <Icon
                  className='h-5 w-5 transition-colors duration-200'
                  icon='tabler:search'
                />
              </div>
            </div>
          </template>

          {/* Dark Mode Toggle */}
          <button className='btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
            {isDark ? (
              <svg
                onClick={darkModeToggler}
                className='h-6 w-6 text-amber-400 transition-transform duration-200 ease-out absolute origin-top'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z' />
              </svg>
            ) : (
              <svg
                onClick={darkModeToggler}
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-amber-400 transition-transform duration-200 ease-out absolute origin-top'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </button>

          {/* Notification*/}
          <div className='flex'>
            <button className='btn relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-slate-500 dark:text-navy-100'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z'
                />
              </svg>

              <span className='absolute -top-px -right-px flex h-3 w-3 items-center justify-center'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80'></span>
                <span className='inline-flex h-2 w-2 rounded-full bg-secondary'></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
