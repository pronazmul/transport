import React, { useState } from 'react'
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'
import {
  useDeleteUsersMutation,
  useGetUsersQuery,
} from './../../../../store/users/usersApi'
import ConfirmModal from './../../../../shared/components/modal/ConfirmModal'
import EditUsermodal from '../EditUserModal'
import ViewUserModal from '../ViewUserModal'
import { userImages } from './../../../../shared/utils/data.utils'
import ArrayUtils from './../../../../shared/utils/array.utils'

const TableItem = ({ user }) => {
  const [editUser, setEditUser] = useState(false)
  const [deleteData, setDeleteUser] = useState(false)
  const [viewUser, setViewUser] = useState(false)
  const [deleteUser, { data, error }] = useDeleteUsersMutation()
  const { refetch } = useGetUsersQuery()

  const handleConfirm = () => {
    deleteUser(user?._id)
    setDeleteUser(false)
  }
  React.useEffect(() => {
    if (data?.success) {
      toast.success(data.message)
      refetch()
    }
    if (error?.data) {
      toast.error(error.data?.message || error?.error || 'Something Went Wrong')
    }
  }, [data])

  return (
    <>
      {editUser && (
        <EditUsermodal setIsOpen={setEditUser} isOpen={editUser} user={user} />
      )}
      {deleteData && (
        <ConfirmModal
          open={deleteData}
          setDelete={setDeleteUser}
          handleConfirm={handleConfirm}
        />
      )}
      {viewUser && (
        <ViewUserModal isOpen={viewUser} setIsOpen={setViewUser} user={user} />
      )}
      <tr className='border border-transparent border-b-slate-200 dark:border-b-navy-500 '>
        <td className='whitespace-nowrap rounded-l-lg px-4 py-4 sm:px-5 flex items-center space-x-2'>
          <img
            className='h-8 w-8 rounded-full'
            src={ArrayUtils.randomSingle(userImages)}
            // src={user?.avatar}
            alt={user?.name}
          />
          <span>{user?.name}</span>
        </td>
        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          <span>{user?.email}</span>
        </td>
        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          <span>{user?.location?.name}</span>
        </td>
        <td className='whitespace-nowrap  px-4 py-4 sm:px-5'>
          <span>{user?.type}</span>
        </td>
        <td className='whitespace-nowrap  px-4 py-4 sm:px-5'>
          <span>{user?.followerCount}</span>
        </td>
        <td className='whitespace-nowrap  px-4 py-4 sm:px-5'>
          <span>{user?.followingCount}</span>
        </td>
        <td className='whitespace-nowrap  px-4 py-4 sm:px-5'>
          <span>{user?.bookmarkCount}</span>
        </td>
        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          <span>{user?.favoriteCount}</span>
        </td>
        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          <span>{user?.shareCount}</span>
        </td>
        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          <span>{user?.noteCount}</span>
        </td>
        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          {user?.active && (
            <span className={'bg-green-500 text-white px-1 py-0.5 rounded'}>
              Active
            </span>
          )}
          {!user?.active && (
            <span className={'bg-red-500 text-white px-1 py-0.5 rounded'}>
              Inactive
            </span>
          )}
        </td>

        <td className='whitespace-nowrap rounded-r-lg px-4 py-4 sm:px-5  '>
          <div className={'flex space-x-2'}>
            <EyeIcon
              onClick={() => setViewUser(true)}
              className='text-gray-500 h-5 w-5 cursor-pointer hover:text-error'
            />
            <PencilSquareIcon
              onClick={() => setEditUser(true)}
              className='text-success h-5 w-5 cursor-pointer hover:text-success'
            />
            <TrashIcon
              onClick={() => setDeleteUser(true)}
              className='text-error h-5 w-5 cursor-pointer hover:text-error'
            />
          </div>
        </td>
      </tr>
    </>
  )
}

export default TableItem
