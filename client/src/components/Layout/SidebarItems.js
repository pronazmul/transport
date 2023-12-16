import React from 'react'

import { BellIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { cn } from '../../lib/utils'
import { Link } from 'react-router-dom'
import UserAvatar from './../../assets/images/liamTampota.png'
import Logo from './../../assets/images/logo.png'

const SidebarItems = ({ navigation }) => {
  return (
    <>
      <div className='flex h-16 shrink-0 items-center gap-1 pl-6'>
        <img className='h-8 w-auto' src={Logo} alt='LucidMark' />
        <span className='text-gray-300 font-bold text-xl'>LucidMark.</span>
      </div>
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='space-y-1 '>
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      item.current
                        ? 'text-[#006DF9] border-l-4 border-[#006DF9] '
                        : 'text-gray-400',
                      'group flex gap-x-3 pl-6 py-2.5 my-2 text-sm leading-6 font-semibold hover:text-[#006DF9] hover:border-l-4 hover:border-[#006DF9] transition duration-300 ease-in-out'
                    )}
                  >
                    <item.icon
                      className={cn('h-6 w-6 shrink-0')}
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li className='mt-auto'>
            <Link
              href='#'
              className='group flex gap-x-3 pl-6 py-2.5 my-2 text-sm leading-6 font-semibold text-gray-400 hover:text-[#006DF9] hover:border-l-4 hover:border-[#006DF9] transition duration-300 ease-in-out'
            >
              <img
                className='h-8 w-8 rounded-full'
                src={UserAvatar}
                alt='Liam Tampota'
              />
              <span className='flex items-center'>
                <span className='justify-between' aria-hidden='true'>
                  Liam Trampota
                </span>
                <ChevronRightIcon
                  className='ml-10 h-4 w-4'
                  aria-hidden='true'
                />
              </span>
            </Link>
            <a
              href='#'
              className='group flex gap-x-3 pl-6 py-2.5 my-2 text-sm leading-6 font-semibold text-gray-400 hover:text-[#006DF9] hover:border-l-4 hover:border-[#006DF9] transition duration-300 ease-in-out'
            >
              <BellIcon className='h-6 w-6 shrink-0 ' aria-hidden='true' />
              Notifications
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default SidebarItems
