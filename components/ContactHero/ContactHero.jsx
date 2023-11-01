export const ContactHero = () => {
  return (
    <div
      className=' relative top-[-165px]'
      style={{
        background: `url("/images/new/team-trust.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
    >
      <div className='pt-60 pb-20 text-white bg-[#3d435db0]'>
        <div className='container mx-auto text-center flex items-center gap-10 '>
          <div>
            <h1 className='text-4xl font-bold mb-2 text-yellow-500'>Get in Touch</h1>
            <p className='text-lg'>
              Should you have any inquiries whatsoever, kindly reach out to us
              using the contact information below.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div className='bg-white bg-opacity-25 backdrop-blur-lg p-6 rounded-lg space-y-2'>
              <i className='fa-lg fa fa-phone' aria-hidden='true'></i>
              <h2 className='text-yellow-500 font-bold text-xl'>Phone</h2>
              <p className='text-xs'>+1 647 469 8766</p>
            </div>
            <div className='bg-white bg-opacity-25 backdrop-blur-lg p-6 rounded-lg space-y-2'>
              <i className='fa-lg fa fa-envelope' aria-hidden='true'></i>
              <h2 className='text-yellow-500 font-bold text-xl'>Email</h2>
              <p className='text-xs'>info@lifeinsurancecanada.com</p>
            </div>
            <div className='bg-white bg-opacity-25 backdrop-blur-lg p-6 rounded-lg space-y-2'>
              <i className='fa-lg fa fa-calendar' aria-hidden='true'></i>
              <h2 className='text-yellow-500 font-bold text-xl'>Working Hours</h2>
              <p className='text-xs'>Monday through Friday <br/> 9:00am-5:00pm</p>
            </div>
            <div className='bg-white bg-opacity-25 backdrop-blur-lg p-6 rounded-lg space-y-2'>
              <i className='fa-lg fa fa-address-book' aria-hidden='true'></i>
              <h2 className='text-yellow-500 font-bold text-xl'>Book a Call</h2>
              <p className='text-xs'>Consultancy Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
