import { Icon } from '@iconify/react'
import DropDownLink from '../../../../shared/components/menus/DropDownLink'

export default function MostFavourites() {
  return (
    <>
      <div className='card col-span-12 lg:col-span-4'>
        <div className='flex items-center justify-between py-3 px-4'>
          <h2 className='font-medium tracking-wide text-slate-700 dark:text-navy-100'>
            Most Favourites Places
          </h2>
          <div className='inline-flex'>
            <DropDownLink
              buttonClass={
                'btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
              }
              itemsClass={
                'popper-box w-[180px] rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700'
              }
              itemClass='flex h-8 items-center px-3 pr-8 font-medium rounded-none tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
              dividerClass={'p-0'}
              data={[
                { title: 'Action', link: '#' },
                { title: 'Another Action', link: '#' },
                { title: 'Another Action', link: '#' },
              ]}
            >
              <Icon icon='tabler:dots' width={20} />
            </DropDownLink>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-y-4 pb-3 sm:grid-cols-3'>
          {/* <ProjectCard /> */}
        </div>
      </div>
    </>
  )
}
