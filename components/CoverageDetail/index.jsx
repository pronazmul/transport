export const CoverageDetail = () => {
  return (
    <div className='flex md:flex-row flex-col gap-3 justify-between container mx-auto'>

      <div className='flex  flex-1 '>
        <div className='flex flex-col gap-4 lg:w-[100%] w-full px-4 mt-8'>

          <div className='grid grid-cols-2 space-x-12'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Coverage Amount *</span>
              <input
                type='text'
                name='amounr'
                id='amount'
                placeholder='$250,000'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Product *</span>
              <select
                name=''
                id=''
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              >
                <option value='20 years term'>20 years term</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-2 space-x-12'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Gender *</span>
              <input
                type='text'
                name='amounr'
                id='amount'
                placeholder='Female'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Age *</span>
              <input
                type='text'
                name='amounr'
                id='amount'
                placeholder='21'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>
          </div>

          <div className='grid grid-cols-2 space-x-12'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Do you smoke *</span>
              <input
                type='text'
                name='amounr'
                placeholder='Female'
                id='amount'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>
          </div>

          <button className='bg-[#305fa9] mt-6 p-4 rounded text-white w-fit'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
