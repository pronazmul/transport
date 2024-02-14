import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Custom Modules
import { cn } from './../../../../shared/utils'

const SidebarListItem = ({ node }) => {
  const search = useLocation().search
  const currentTab = new URLSearchParams(search).get('tab')
  const [childVisible, setChildVisiblity] = React.useState(false)
  const hasChild = node?.children?.length ? true : false
  const subRef = React.useRef()

  const handleIsVisible = () => {
    setChildVisiblity((v) => !v)
  }

  return (
    <li>
      {!hasChild ? (
        <Link
          to={!hasChild ? `${node.link}` : '/'}
          className={`flex items-center justify-between py-3 text-base tracking-wide text-slate-500 outline-none
           transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 
           dark:hover:text-navy-50 `}
        >
          <span className='space-x-2'>
            <i
              className={cn(
                node.icon,
                'pr-2 text-primary dark:text-accent-light'
              )}
            />
            {node.label}
          </span>
        </Link>
      ) : (
        <span
          onClick={handleIsVisible}
          className={`cursor-pointer flex items-center justify-between py-3 text-base 
          tracking-wide text-slate-500 outline-none transition-[color,padding-left]
           duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50 
           ${
             childVisible
               ? 'text-slate-800 font-semibold dark:text-navy-50'
               : ''
           }`}
        >
          <span className='space-x-2'>
            <i
              className={cn(
                node.icon,
                'pr-2 text-primary dark:text-accent-light'
              )}
            />
            {node.label}
          </span>
          {hasChild && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-4 w-4 text-slate-400 transition-transform ease-in-out ${
                childVisible && 'rotate-90'
              }`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              />
            </svg>
          )}
        </span>
      )}

      {hasChild && (
        <ul
          ref={subRef}
          className={` overflow-hidden transition-all duration-500
       `}
          style={{
            height: childVisible ? `${subRef.current?.scrollHeight}px` : '0px',
          }}
        >
          {node.children.map((nastedNode) => (
            <li key={nastedNode.key} className='duration-300'>
              <Link
                to={`/?tab=${nastedNode.link}`}
                className={`flex items-center justify-between p-2 text-base tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 ${
                  currentTab === nastedNode.link
                    ? 'font-medium text-primary dark:text-accent-light'
                    : 'text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50'
                }`}
              >
                <div className='flex items-center space-x-2'>
                  <div className='h-1.5 w-1.5 rounded-full border border-current opacity-40'></div>
                  <span>{nastedNode.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default SidebarListItem
