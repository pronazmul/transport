import { useDispatch } from 'react-redux'
import AppLogo from './../../../../assets/images/foods/food-icon-1.svg'
import { sidebarToggled } from './../../../../store/global/globalSlice'

const SidebarHeader = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex h-18 w-full items-center justify-between pl-4 pr-1'>
      <div className='flex justify-center space-x-4 items-center'>
        <img className='mx-auto h-12 w-12' src={AppLogo} alt='logo' />
        <p className='text-lg font-bold tracking-wider text-slate-800 dark:text-navy-100'>
          Eatmap
        </p>
      </div>
      <button
        onClick={() => dispatch(sidebarToggled())}
        className='btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
    </div>
  )
}

export default SidebarHeader
