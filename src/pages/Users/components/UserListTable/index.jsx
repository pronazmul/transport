import { useSelector } from 'react-redux'
import { useEffect } from 'react'

// Custom Module
import TableItem from './TableItem'
import { useGetUsersQuery } from './../../../../store/users/usersApi'
import Loader from './../../../../shared/components/Loader'
import Alert from './../../../../shared/components/Alert'

const UserListTable = () => {
  const {
    users,
    query,
    queryOptions: { page, search },
  } = useSelector((state) => state.users)
  const { isError, isLoading, error, data, refetch } = useGetUsersQuery(query)

  let content

  if (isLoading) {
    content = <Loader />
  }

  if (isError || error) {
    content = <Alert message={error?.message} />
  }

  if (data && users?.length) {
    content = users.map((data) => <TableItem key={data?._id} user={data} />)
  }

  useEffect(() => {
    refetch()
  }, [page, search, refetch])

  return (
    <div className='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table className='is-hoverable w-full text-left'>
        <thead>
          <tr className='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th className='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              NAME
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              EMAIL
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              Location
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              ROLE
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              FOLLOWERS
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              FOLLOWINGS
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              BOOKMARKS
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              FAVORITES
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              SHARES
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              NOTES
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              STATUS
            </th>
            <th className='whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  )
}

export default UserListTable
