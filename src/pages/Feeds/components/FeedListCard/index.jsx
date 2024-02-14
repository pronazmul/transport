import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import dayjs from 'dayjs'

// Custom Module
import EditFeedModal from '../EditFeedModal'
import Logo from './../../../../assets/images/object/object-2.jpg'
import {
  useDeleteFeedMutation,
  useGetFeedsQuery,
} from './../../../../store/feeds/feedApi'
import ConfirmModal from './../../../../shared/components/modal/ConfirmModal'
import Dropdown from './../../../../shared/components/menus/Dropdown'
import ArrayUtils from './../../../../shared/utils/array.utils'
import { foodImages } from './../../../../shared/utils/data.utils'

const FeedListCard = ({ feed }) => {
  const [openDelete, setOpenDelete] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const { title, description, creator, createdAt, location } = feed
  const [deleteFeed, { data, error }] = useDeleteFeedMutation()
  const { refetch } = useGetFeedsQuery()

  const handleFeed = (name) => {
    if (name === 'Edit') {
      setOpenEdit(true)
    }
    if (name === 'Delete') {
      setOpenDelete(true)
    }
  }
  const handleConfirm = () => {
    setOpenDelete(false)
    deleteFeed(feed._id)
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
      {openEdit && (
        <EditFeedModal isOpen={openEdit} setIsOpen={setOpenEdit} feed={feed} />
      )}

      {openDelete && (
        <ConfirmModal
          open={openDelete}
          setDelete={setOpenDelete}
          handleConfirm={handleConfirm}
        />
      )}

      <div className='card lg:flex-row'>
        <img
          className='h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center
                        lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg'
          src={ArrayUtils.randomSingle(foodImages)}
          alt='image'
        />
        <div className='flex w-full grow flex-col px-4 py-3 sm:px-5'>
          <div className='flex items-center justify-between'>
            <a className='text-xs+ text-info' href='#'>
              {location.name}
            </a>
            <div className='-mr-1.5 flex space-x-1'>
              <div className='inline-flex'>
                <Dropdown
                  handleOption={handleFeed}
                  options={[{ name: 'Edit' }, { name: 'Delete' }]}
                  children
                  setOption
                  className
                  buttonClass={
                    'btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
                  }
                  itemsClass={
                    'popper-box w-[180px] rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700'
                  }
                  itemClass='flex h-8 items-center px-3 pr-8 font-medium rounded-none tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
                  dividerClass={'p-0'}
                >
                  <button
                    className='btn h-7 w-7
                                rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25
                                dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4.5 w-4.5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                      ></path>
                    </svg>
                  </button>
                </Dropdown>
              </div>
            </div>
          </div>
          <div>
            <a
              href='#'
              className='text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light'
            >
              {title}
            </a>
          </div>
          <p className='mt-1 line-clamp-3'>{description}</p>
          <div className='grow'>
            <div className='mt-2 flex items-center text-xs'>
              <a
                href='#'
                className='flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100'
              >
                <div className='avatar h-6 w-6'>
                  <img
                    className='rounded-full'
                    src={creator.avatar}
                    alt='avatar'
                  />
                </div>
                <span className='line-clamp-1'>{creator.name}</span>
              </a>
              <div className='mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500'></div>
              <span className='shrink-0 text-slate-400 dark:text-navy-300'>
                {dayjs(createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <div className='mt-1 flex justify-end'>
            <a
              href='#'
              className='btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25'
            >
              READ ARTICLE
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedListCard
