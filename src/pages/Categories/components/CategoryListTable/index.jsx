import { useEffect } from 'react'
import { useSelector } from 'react-redux'

// Custom Modules
import TableItem from './TableItem'
import { useGetCategoriesQuery } from './../../../../store/categories/categoryApi'
import Loader from './../../../../shared/components/Loader'
import Alert from './../../../../shared/components/Alert'

const CategoryListTable = () => {
  const {
    categories,
    query,
    queryOptions: { page, search },
  } = useSelector((state) => state.categories)
  const { isError, isLoading, error, data, refetch } =
    useGetCategoriesQuery(query)

  let content

  if (isLoading) {
    content = <Loader />
  }

  if (isError || error) {
    content = <Alert message={error?.message} />
  }

  if (data && categories?.length) {
    content = categories.map((cat) => (
      <TableItem key={cat._id} category={cat} />
    ))
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
              ID
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              NAME
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              CODE
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

export default CategoryListTable
