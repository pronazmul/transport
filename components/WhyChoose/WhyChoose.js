import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import WhyChooseBox from './WhyChooseBox'
import Link from 'next/link'

const insuranceBuzz = [
  {
    id: 1,
    title: 'Digital Insurance marketplace',
    available: true,
    icon: <CheckIcon width={22} className='text-white' />,
  },
  {
    id: 2,
    title: 'Seamless online experience',
    available: true,
    icon: <CheckIcon width={22} className='text-white' />,
  },
  {
    id: 3,
    title: 'One of the best Prices - Guaranteed',
    available: true,
    icon: <CheckIcon width={22} className='text-white' />,
  },
  {
    id: 4,
    title: 'Honest and fair guidance',
    available: true,
    icon: <CheckIcon width={22} className='text-white' />,
  },
  {
    id: 6,
    title: 'Fee-free advisors',
    available: true,
    icon: <CheckIcon width={22} className='text-white' />,
  },
  {
    id: 7,
    title: 'Accessible advisor support',
    available: true,
    icon: <CheckIcon width={22} className='text-white' />,
  },
]

const comparisons = [
  {
    id: 1,
    title: 'Digital Insurance marketplace',
    available: true,
    icon: <XMarkIcon width={22} className='text-red-500' />,
  },
  {
    id: 2,
    title: 'Seamless online experience',
    available: true,
    icon: <XMarkIcon width={22} className='text-red-500' />,
  },
  {
    id: 3,
    title: 'One of the best Prices - Guaranteed',
    available: true,
    icon: <XMarkIcon width={22} className='text-red-500' />,
  },
  {
    id: 4,
    title: 'Honest and fair guidance',
    available: true,
    icon: <XMarkIcon width={22} className='text-red-500' />,
  },
  {
    id: 6,
    title: 'Fee-free advisors',
    available: true,
    icon: <XMarkIcon width={22} className='text-red-500' />,
  },
  {
    id: 7,
    title: 'Accessible advisor support',
    available: true,
    icon: <CheckIcon width={22} className='text-green-500' />,
  },
]

const WhyChoose = () => {
  return (
    <div className='bg-[#151b32e5] text-white'>
      <div className=' py-5 pt-16'>
        <h2 className='text-white p-[0.40rem] mb-2 text-center text-4xl font-bold'>
          <span className=' relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1'>
            Why InsuranceBuzz
          </span>
        </h2>
        <div className='mt-8 text-md text-gray-200 container mx-auto'>
          When it comes to securing your future, InsuranceBuzz is the name you
          can trust. We offer personalized insurance advisory services that
          cater to your unique needs. Our team is committed to providing you
          with unbiased advice and helping you make informed decisions. With
          InsuranceBuzz, you can have peace of mind knowing that your financial
          security is in good hands.
        </div>

        <div className=' mt-10  py-20'>
          <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto h-full  gap-7 items-center'>
            <div className=' rounded-xl bg-white shadow-lg p-7 py-10'>
              <h3 className='text-2xl font-bold text-center text-gray-900 bg-orange-200 rounded-md py-5'>
                Insurance Brokers
              </h3>
              <ul className='mt-5 px-10 flex flex-col gap-6 text-gray-700  text-base font-semibold'>
                {comparisons.map((item) => (
                  <li key={item.id} className=' flex items-center gap-2'>
                    {item.icon}
                    <span className='text-md'>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className=' rounded-xl bg-[#45A1D3] shadow-lg p-7 pt-10 pb-10'>
              <div className='mb-5'>
                <h3 className='text-2xl font-bold text-center text-white bg-indigo-600 rounded-md py-5'>
                  InsuranceBuzz
                </h3>
              </div>
              <ul className='px-10 flex flex-col gap-6 text-white text-base font-semibold'>
                {insuranceBuzz.map((items) => (
                  <li key={items.id} className=' flex items-center gap-2'>
                    {items.icon}
                    <span className='text-md'>{items.title}</span>
                  </li>
                ))}
              </ul>
              <div className='text-center mt-14'>
                <Link
                  href={'/'}
                  className='px-5 py-3 bg-orange-500  text-lg rounded-full'
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className=' rounded-xl bg-white shadow-lg p-7 py-10'>
              <h3 className='text-2xl font-bold text-center text-gray-900 bg-orange-200 rounded-md py-5'>
                Insurance Companies
              </h3>
              <ul className='mt-5 px-10 flex flex-col gap-6 text-base font-semibold text-gray-700'>
                {comparisons.map((item) => (
                  <li key={item.id} className=' flex items-center gap-2'>
                    {item.icon}
                    <span className='text-md'>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='container mx-auto'>
          <div className='my-10 grid sm:grid-cols-3 grid-cols-1 gap-10'>
            <WhyChooseBox
              image={'/images/trust.png'}
              title={'Trust and Transparency'}
              description={
                'We believe in building trust with our clients through transparent communication and honest advice. Our aim is to provide you with the information you need to make informed decisions about your insurance coverage.'
              }
            />
            <WhyChooseBox
              image={'/images/personalization.png'}
              title={'Personalized Solutions'}
              description={
                "We understand that everyone's insurance needs are unique. That's why we at InsuranceBuzz offer personalized solutions tailored to vour specific requirements. Our team of experts will work closely with you to find the right insurance plans that fit your lifestyle and budget."
              }
            />
            <WhyChooseBox
              image={'/images/customer-service.png'}
              title={'Exceptional Customer Service'}
              description={
                'At InsuranceBuzz, we prioritize customer satisfaction above all else. Our dedicated team is committed to providing exceptional customer service, ensuring that your insurance buying experience is smooth and hassle-free. We are always here to assist you throughout the process.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
