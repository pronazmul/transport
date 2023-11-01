export const ContactForm = () => {
  return (
    <div className='flex md:flex-row flex-col gap-3 justify-between container mx-auto'>
      <div className='flex  flex-1 '>
        <div className='flex flex-col gap-4 lg:w-[100%] w-full px-4 mt-8'>
          <div className='grid grid-cols-2 space-x-12'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Name *</span>
              <input
                type='text'
                name='amounr'
                id='amount'
                placeholder='Enter your name'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Email *</span>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='someone@example.com'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>
          </div>

          <div className='grid grid-cols-2 space-x-12'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Subject *</span>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='Subject'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>
            {/* <div className='flex flex-col gap-2'>
              <span className='text-sm'>Age *</span>
              <input
                type='text'
                name='amounr'
                id='amount'
                placeholder='21'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div> */}
          </div>

          <div className='grid grid-cols-2 space-x-12'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Message *</span>
              <textarea
                rows={5}
                type='text'
                name='message'
                placeholder='Message'
                id='message'
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
