export default function CountCardItem({ count, icon, name }) {
  return (
    <>
      <div className='rounded-lg bg-slate-150 p-4 dark:bg-navy-700'>
        <div className='flex justify-between'>
          <p className='text-xl font-semibold text-slate-700 dark:text-navy-100'>
            {count}
          </p>
          {icon}
        </div>
        <p className='mt-1 text-xs+'>{name}</p>
      </div>
    </>
  )
}
