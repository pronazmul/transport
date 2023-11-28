import axios from 'axios'
import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import { Link, useLocation } from 'react-router-dom'
import {
  AiOutlineSetting,
  BiDollarCircle,
  MdOutlineAccountBox,
  MdOutlineLogin,
  MdSlowMotionVideo,
} from '../constant/icons'
import NotificationDropDown from './notifications/DropDown/NotificationDropDown'
import useAuth from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { userLoggedOut } from '../features/auth/authSlice'

export default function Nav() {
  const dispatch = useDispatch()
  const auth = useAuth()
  const location = useLocation()
  const [dropDown, setDropDown] = useState(false)

  const [search, setSearch] = useState({
    value: '',
    suggestions: [],
  })

  const watchPage =
    location.pathname === `/watch` ||
    location.pathname === '/studio/stream-manager'

  const handleClick = () => {
    setDropDown(() => !dropDown)
  }

  const navItems = [
    { id: 1, icon: <MdOutlineAccountBox fontSize={24} />, title: 'Account' },
    {
      id: 2,
      icon: <MdSlowMotionVideo fontSize={24} />,
      title: 'Creator Studio',
    },
    { id: 3, icon: <BiDollarCircle fontSize={24} />, title: 'Subscription' },
    { id: 4, icon: <AiOutlineSetting fontSize={24} />, title: 'Settings' },
  ]

  const theme = {
    container: {
      position: 'relative',
    },
    suggestionsContainer: {
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'white',
      border: '1px solid #ccc',
      maxHeight: '200px',
      overflowY: 'auto',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    suggestion: {
      padding: '8px 12px',
      cursor: 'pointer',
    },
  }

  function handleLogOut() {
    dispatch(userLoggedOut())
  }

  return (
    <div
      className={`w-full sticky top-0 z-10 ${
        watchPage ? 'bg-[#212121]' : 'bg-w'
      }`}
    >
      <div className='flex items-center max-w-[1450px] mx-auto justify-between px-4 py-4 backdrop-blur-sm'>
        <div className='flex items-center'>
          <Link
            to='/'
            className={`font-bold text-3xl ${watchPage ? 'text-white' : ''}`}
          >
            Header
          </Link>
          <ul className='flex items-center gap-5 ml-12'>
            {['Home', 'Discover', 'Watch', 'Messages'].map((item) => (
              <li
                className={`${
                  watchPage ? 'text-white' : 'hover:text-blue-500'
                }  text-[20px] mt-[3px]`}
                key={item}
              >
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center gap-2'>
          {/* <Autosuggest
            className='flex items-center bg-gray-100 rounded-3xl py-2 px-4'
            suggestions={search.suggestions}
            onSuggestionsFetchRequested={({ value }) => getSuggestions(value)}
            onSuggestionsClearRequested={() =>
              setSearch({ ...search, suggestions: [] })
            }
            getSuggestionValue={(suggestion) => suggestion.user.name}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={onSuggestionSelected}
            inputProps={{
              placeholder: 'Search..',
              value: search.value,
              onChange: handleOnChange,
              onBlur: () => setSearch({ ...search, value: '' }),
              className:
                'w-28 transition-all duration-500 ml-3 outline-none focus:outline-none bg-gray-100 text-md placeholder:text-black',
            }}
            theme={theme}
          /> */}

          {/* <form
            onSubmit={handleSubmit}
            className="flex items-center bg-gray-100 rounded-3xl py-2 px-4"
          >
            <div>
              <AiOutlineSearch fontSize={23} />
            </div>
            <input
              type="text"
              value={search}
              onChange={handleInputChange}
              className="w-28 transition-all duration-500 ml-3 outline-none focus:outline-none bg-gray-100 text-md placeholder:text-black"
              placeholder="Search"
            />
          </form> */}
          {/* <AutoSuggestions suggestions={suggestions} />
          <SearchResults results={results} /> */}
          {auth ? (
            <>
              <NotificationDropDown watchPage={watchPage} />
              <div className='cursor-pointer relative' onClick={handleClick}>
                <img
                  className='h-[38px] w-[38px] rounded-full'
                  src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
                  alt='user'
                />
                <div
                  className={`absolute top-[109%] min-w-[250px] right-0 ${
                    dropDown ? 'flex opacity-100' : 'hidden opacity-0'
                  } flex-col  bg-white shadow-sm shadow-gray-300 opacity-1`}
                >
                  {navItems.map((item) => (
                    <div
                      className='w-max rounded-sm hover:bg-gray-100 px-4 py-2 min-w-full '
                      key={item.id}
                    >
                      <Link
                        to={`${
                          item.title === 'Creator Studio'
                            ? `/studio/content`
                            : `/${item.title.toLowerCase()}`
                        }`}
                        className='text-black text-lg flex items-center gap-2'
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    </div>
                  ))}
                  <Link
                    to='#'
                    className='text-black text-lg flex items-center gap-2 px-4 py-2 min-w-full hover:bg-gray-100'
                    onClick={handleLogOut}
                  >
                    {<MdOutlineLogin fontSize={24} />} Logout
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}
