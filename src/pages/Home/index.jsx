import CountCard from './components/CountCard'
import LatestFeeds from './components/LatestFeeds'
import MostFavourites from './components/MostFavourites'
import SalesProfit from './components/SalesProfit'

const Home = () => {
  return (
    <>
      <div className='mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6'>
        <div className='col-span-12 lg:col-span-8'>
          <div className='flex items-center justify-between space-x-2'>
            <h2 className='text-base font-medium tracking-wide text-slate-800 line-clamp-1 dark:text-navy-100'>
              Feeds Activity
            </h2>
            <div className='is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200'>
              <div className='tabs-list flex p-1'>
                <button className='btn shrink-0 px-3 py-1 text-xs+ font-medium hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'>
                  Last month
                </button>
                <button className='btn shrink-0 px-3 py-1 text-xs+ font-medium hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'>
                  This year
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row sm:space-x-7'>
            <SalesProfit />
          </div>
        </div>
        <CountCard />
        <LatestFeeds />
        <MostFavourites />
      </div>
    </>
  )
}

export default Home
