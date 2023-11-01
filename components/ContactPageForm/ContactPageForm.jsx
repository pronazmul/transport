export const ContactPageForm = () => {
  return (
    <div className='flex justify-between gap-20 relative top-[-115px] container mx-auto'>
      <div className='flex flex-col gap-4 lg:w-[100%] w-full px-4 mt-8'>
        <div className='flex flex-col gap-2'>
          <span className='text-sm'>Full Name *</span>
          <input
            type='text'
            name='fullname'
            id='fullname'
            placeholder='Enter your full name'
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
        <div className='flex flex-col gap-2'>
          <span className='text-sm'>Message *</span>
          <textarea
            type='text'
            name='message'
            id='message'
            rows={5}
            placeholder='Message'
            className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
          />
        </div>

        <button className='bg-[#305fa9] mt-6 p-4 rounded text-white w-fit'>
          Submit
        </button>
      </div>

      <div className='flex flex-col gap-4 max-w-[400px]  border-gray-200 border p-5 mt-12'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold'>Contact Us</h1>
          <p>Need More information?</p>
        </div>

        <div className='flex gap-4'>
          <i class='fa fa-home' aria-hidden='true'></i>
          <p className='text-gray-800 text-sm'>
            {' '}
            Insurancebuzz
            <br />
            925 Lawson Road #40, London, ON N6G 4X3
          </p>
        </div>
        <div className='flex gap-4'>
          <i class='fa fa-phone' aria-hidden='true'></i>

          <p className='text-gray-800 text-sm'>+1 647 469 8766</p>
        </div>

        <div className='flex gap-4'>
          <i class='fa fa-envelope' aria-hidden='true'></i>
          <p className='text-gray-800 text-sm'>vidyakittur15@gmail.com</p>
        </div>
        <div className='flex gap-4'>
          <i class='fa fa-globe' aria-hidden='true'></i>

          <p className='text-gray-800 text-sm'> insurancebuzz.ca</p>
        </div>
      </div>
    </div>
  );
};
