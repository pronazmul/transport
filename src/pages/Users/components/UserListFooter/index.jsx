import { useDispatch, useSelector } from 'react-redux'

// Custom Modules
import { cn } from './../../../../shared/utils'
import {
  SvgLeftAngle,
  SvgRightAngle,
} from './../../../../shared/utils/svgIcons'
import { setUserPage } from './../../../../store/users/usersSlice'

const UserListFooter = () => {
  
  const dispatch = useDispatch()
  const {
    meta: { page, limit, total },
  } = useSelector((state) => state.users)

  const pages = Math.ceil(total / limit)

  function handlePage(selectedPage) {
    dispatch(setUserPage(selectedPage))
  }

  return (
    <div className='flex flex-col justify-between space-y-4 px-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5'>
      <div className='text-xs+'>
        {page * limit - limit + 1} - {Math.min(total, page * limit)} of {total}
        entries
      </div>

      <ol className='pagination'>
        <li className='rounded-l-full bg-slate-150 dark:bg-navy-500'>
          <button
            onClick={() => handlePage(Math.max(1, page - 1))}
            className='flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'
          >
            {SvgLeftAngle}
          </button>
        </li>

        {Array.from({ length: pages }, (_, i) => i + 1).map((item) => (
          <li className='bg-slate-150 dark:bg-navy-500' key={item}>
            <button
              onClick={() => handlePage(item)}
              className={cn(
                'flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90',
                {
                  'bg-primary hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90':
                    page === item,
                }
              )}
            >
              {item}
            </button>
          </li>
        ))}

        <li className='rounded-r-full bg-slate-150 dark:bg-navy-500'>
          <button
            onClick={() => handlePage(Math.min(pages, page + 1))}
            className='flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'
          >
            {SvgRightAngle}
          </button>
        </li>
      </ol>
    </div>
  )
}

export default UserListFooter
