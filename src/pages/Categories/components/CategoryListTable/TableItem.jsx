import React, { useState } from 'react'
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'

// Custom Module
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from './../../../../store/categories/categoryApi'
import EditCategoryModal from './../EditCategoryModal'
import ConfirmModal from './../../../../shared/components/modal/ConfirmModal'

const TableItem = ({ category }) => {
  const [editCategory, setEditCategory] = useState(false)
  const [deleteData, setDelete] = useState(false)
  const [deleteCategory, { data, error }] = useDeleteCategoryMutation()
  const { refetch } = useGetCategoriesQuery()

  const handleConfirm = () => {
    setDelete(false)
    deleteCategory(category._id)
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
      {editCategory && (
        <EditCategoryModal
          isOpen={editCategory}
          setIsOpen={setEditCategory}
          category={data}
        />
      )}

      {deleteData && (
        <ConfirmModal
          open={deleteData}
          setDelete={setDelete}
          handleConfirm={handleConfirm}
        />
      )}
      {/*{viewUser && <ViewUser isOpen={viewUser} setIsOpen={setViewUser} />}*/}

      <tr className='border border-transparent border-b-slate-200 dark:border-b-navy-500 '>
        <td
          className='whitespace-nowrap rounded-l-lg px-4 py-4 sm:px-5
                         '
        >
          <span>{category?._id}</span>
        </td>
        <td className='whitespace-nowrap  px-4 py-4 sm:px-5'>
          {category?.name}
        </td>

        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          {category?.code}
        </td>
        <td className='whitespace-nowrap  px-4 py-4 sm:px-5'>
          {category?.active && (
            <span className={'bg-green-500 text-white px-1 py-0.5 rounded'}>
              Active
            </span>
          )}
          {!category?.active && (
            <span className={'bg-red-500 text-white px-1 py-0.5 rounded'}>
              Inactive
            </span>
          )}
        </td>

        <td className='whitespace-nowrap rounded-r-lg px-4 py-4 sm:px-5 flex space-x-2'>
          <EyeIcon
            onClick={() => setEditCategory(true)}
            className='text-gray-500 h-5 w-5 cursor-pointer hover:text-error'
          />
          <PencilSquareIcon
            onClick={() => setEditCategory(true)}
            className='text-success h-5 w-5 cursor-pointer hover:text-success'
          />
          <TrashIcon
            onClick={() => setDelete(true)}
            className='text-error h-5 w-5 cursor-pointer hover:text-error'
          />
        </td>
      </tr>
    </>
  )
}

export default TableItem
