import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export default function DropDownLink({
  data,
  children,
  className,
  buttonClass,
  itemsClass,
  itemClass,
  dividerClass,
}) {
  return (
    <div className={`text-right top-16 ${className}`}>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button className={buttonClass}>{children}</Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items
            className={twMerge(
              'absolute z-10 right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
              itemsClass
            )}
          >
            <div className={twMerge('p-1', dividerClass)}>
              {data &&
                data.map((item, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <Link
                        to={item.sublink}
                        className={twMerge(
                          `${
                            active
                              ? 'bg-indigo-500  text-white'
                              : 'text-gray-500'
                          } flex rounded-md items-center w-full p-2 text-sm space-x-4`,
                          itemClass
                        )}
                      >
                        <span>
                          <i className={item.icon} />
                        </span>
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
