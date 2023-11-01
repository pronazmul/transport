const Disclimer = () => {
  return (
    <div className='bg-[#151b32e5] text-white'>
      <div className='py-20'>
        <h2 className='text-white p-[0.40rem] mb-2 text-center text-4xl font-bold'>
          <span className=' relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1'>
            About This Comparison
          </span>
        </h2>
        <div className='mt-8 text-md text-gray-200 container mx-auto'>
          The information used in this comparison has been taken from the rate
          cards and rate manuals which life companies routinely publish and
          distribute to life agents and brokers. To the best of InsuranceBuzz's
          ability we have done everything we can to ensure that the information
          contained in this comparison is up-to-date and accurate. However, WE
          CANNOT GUARANTEE ACCURACY. In the event that there is a discrepancy
          between the information contained in this comparison, and any life
          company authorized illustration and/or policy, the policy shall
          govern.
        </div>
      </div>
    </div>
  )
}

export default Disclimer
