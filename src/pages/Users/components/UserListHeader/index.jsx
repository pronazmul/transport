import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

// Custom Modules
import AddUserModal from '../AddUserModal'
import { SvgSearchIcon } from './../../../../shared/utils/svgIcons'
import { setUserSearch } from './../../../../store/users/usersSlice'

const UserListHeader = () => {
  const [addUser, setAddUser] = useState(false)

  // Search Functionliaties
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      dispatch(setUserSearch(search))
    }, 300)
    return () => clearTimeout(debounceTimer)
  }, [search, dispatch])

  return (
    <>
      {addUser && <AddUserModal isOpen={addUser} setIsOpen={setAddUser} />}
      <div className='flex items-center justify-between '>
        <div>
          <h2 className='text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl'>
            All Users
          </h2>
        </div>
        <div className='flex space-x-2'>
          <label className='relative flex'>
            <input
              className='form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
              placeholder='Search here...'
              onChange={(e) => setSearch(e.target.value)}
              type='text'
            />
            <div className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
              {SvgSearchIcon}
            </div>
          </label>
          <button
            onClick={() => setAddUser(true)}
            className='flex space-x-1 btn-indigo-active'
          >
            <PlusCircleIcon className='h-5 w-5' />
            <span>Add User</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default UserListHeader
