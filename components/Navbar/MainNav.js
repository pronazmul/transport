import { Fragment, useState, useEffect } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CaretDownFilled } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainNav() {
  const lifeInsuranceItems = [
    {
      key: '1',
      label: (
        <a rel='noopener noreferrer' href='/life-insurance'>
          Life Insurance
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          rel='noopener noreferrer'
          href='/life-insurance/critical-illness-insurance'
        >
          Critical Illness Insurance
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a
          rel='noopener noreferrer'
          href='/life-insurance/disability-insurance'
        >
          Disability insurance
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a rel='noopener noreferrer' href='/life-insurance/health-insurance'>
          Health Insurance - Drug and Dental plans
        </a>
      ),
    },
  ]

  const travelInsuranceItems = [
    {
      key: '1',
      label: (
        <a rel='noopener noreferrer' href='/visitor-canada'>
          Visitor to Canada Insurance
        </a>
      ),
    },

    {
      key: '2',
      label: (
        <a rel='noopener noreferrer' href='/super-visa-insurance'>
          Super Visa Insurance
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a rel='noopener noreferrer' href='/travel-insurance'>
          Travel Insurance
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a rel='noopener noreferrer' href='/international-student-insurance'>
          International Student Insurance
        </a>
      ),
    },
  ]

  const otherItems = [
    {
      key: '1',
      label: (
        <a rel='noopener noreferrer' href='/life-insurance'>
          Investments
        </a>
      ),
      children: [
        {
          key: '5-1',
          label: (
            <a rel='noopener noreferrer' href='/investments/rrsp'>
              RRSP
            </a>
          ),
        },
        {
          key: '5-2',
          label: (
            <a rel='noopener noreferrer' href='/investments/tfsa'>
              TFSA
            </a>
          ),
        },
        {
          key: '5-3',
          label: (
            <a rel='noopener noreferrer' href='/investments/resp'>
              RESP
            </a>
          ),
        },
      ],
    },
    {
      key: '2',
      label: (
        <a rel='noopener noreferrer' href='/'>
          Quotes
        </a>
      ),
      children: [
        {
          key: '1',
          label: (
            <a rel='noopener noreferrer' href='/life-insurance'>
              Life Insurance
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a rel='noopener noreferrer' href='/visitor-canada'>
              Visitor to Canada
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a rel='noopener noreferrer' href='/super-visa-insurance'>
              Super visa Insurance
            </a>
          ),
        },
        {
          key: '4',
          label: (
            <a rel='noopener noreferrer' href='/travel-insurance'>
              Travel Insurance
            </a>
          ),
        },
        {
          key: '5',
          label: (
            <a
              rel='noopener noreferrer'
              href='/international-student-insurance'
            >
              International Student Insurance
            </a>
          ),
        },
        {
          key: '6',
          label: (
            <a rel='noopener noreferrer' href='/need-analysis-calculator'>
              Need Analysis Calculator
            </a>
          ),
        },
      ],
    },
    {
      key: '3',
      label: (
        <a rel='noopener noreferrer' href='/resources'>
          Resources
        </a>
      ),
    },
  ]

  const navigation = [
    { name: 'Home', current: true, href: '/' },
    { name: 'Life Insurance', current: false, href: '/life-insurance' },
    { name: 'Travel Insurance', current: false, href: '/travel-insurance' },
    { name: 'Auto Insurance', current: false, href: '/auto-insurance' },
    { name: 'Home Insurance', current: false, href: '/home-insurance' },
    { name: 'Others', current: false, href: '/' },
    // { name: 'About Us', current: false, href: '/about-us' },
    { name: 'Contact', current: false, href: '/contact' },
  ]
  const [sticky, setSticky] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [router.asPath])

  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div
            className={`mx-auto xl:px-0  px-5 max-w-7xl `}
          >
            <div className='relative flex h-10 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='hidden lg:block'>
                  <div className='flex space-x-2'>
                    {navigation.map((item) => (
                      <>
                        {item.name === 'Life Insurance' && (
                          <>
                            {console.log(item.name, 'Item')}
                            <Dropdown
                              menu={{
                                items: lifeInsuranceItems,
                              }}
                            >
                              <div className='flex items-center gap-1  px-2'>
                                <a
                                  key={item.name}
                                  className={classNames(
                                    item.current
                                      ? ' text-white'
                                      : 'text-gray-300  hover:text-white',
                                    'rounded-md py-2 text-md font-bold cursor-pointer'
                                  )}
                                  aria-current={
                                    item.current ? 'page' : undefined
                                  }
                                >
                                  {item.name}
                                </a>
                                <CaretDownFilled style={{ color: 'white' }} />
                              </div>
                            </Dropdown>
                          </>
                        )}

                        {item.name === 'Travel Insurance' && (
                          <>
                            {console.log(item.name, 'Item')}
                            <Dropdown menu={{ items: travelInsuranceItems }}>
                              <div className='flex items-center gap-1  px-2'>
                                <a
                                  key={item.name}
                                  className={classNames(
                                    item.current
                                      ? ' text-white'
                                      : 'text-gray-300  hover:text-white',
                                    'rounded-md py-2 text-md font-bold cursor-pointer'
                                  )}
                                  aria-current={
                                    item.current ? 'page' : undefined
                                  }
                                >
                                  {item.name}
                                </a>
                                <CaretDownFilled style={{ color: 'white' }} />
                              </div>
                            </Dropdown>
                          </>
                        )}
                        {item.name === 'Others' && (
                          <Dropdown menu={{ items: otherItems }}>
                            <div className='flex items-center gap-1 px-2'>
                              <a
                                key={item.name}
                                className={classNames(
                                  item.current
                                    ? ' text-white'
                                    : 'text-gray-300  hover:text-white',
                                  'rounded-md py-2 text-md font-bold cursor-pointer'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                              <CaretDownFilled style={{ color: 'white' }} />
                            </div>
                          </Dropdown>
                        )}
                        {item.name !== 'Life Insurance' &&
                          item.name !== 'Travel Insurance' &&
                          item.name !== 'Others' && (
                            <a
                              href={item.href}
                              key={item.name}
                              className={classNames(
                                item.current
                                  ? ' text-white'
                                  : 'text-gray-300  hover:text-white',
                                'rounded-md px-2 py-2 text-md font-bold cursor-pointer'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <>
                  {item.name === 'Products' && (
                    <div className='flex flex-col'>
                      {console.log(item.name, 'Item')}
                      <Dropdown menu={{ items }}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? ' text-white'
                              : 'text-gray-300  hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Dropdown>
                    </div>
                  )}
                  {item.name === 'Quotes' && (
                    <Dropdown menu={{ items: quoteItems }}>
                      <a
                        key={item.name}
                        className={classNames(
                          item.current
                            ? ' text-white'
                            : 'text-gray-300  hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    </Dropdown>
                  )}
                  {item.name !== 'Products' && item.name !== 'Quotes' && (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      className={classNames(
                        item.current
                          ? ' text-white'
                          : 'text-gray-300  hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )}
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
