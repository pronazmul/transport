import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MainFooter = () => {
  const router = useRouter()
  return (
    <div className='bg-[#3D4351] py-10 px-5 pb-3 w-full'>
      <div className='grid lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 lg:gap-4 gap-10  container mx-auto'>
        <div className='flex flex-col gap-4 col-span-2'>
          <div className='flex items-center gap-2'>
            <img className='w-24' src='./images/logo.png' alt='logo' />
            <div>
              <p className='text-white font-bold text-[20px]'>InsuranceBuzz</p>
              <p className='text-white text-sm'>
                Insurance Simplified, Buzz Amplified
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3  gap-6 col-span-3 justify-center'>
          <div className='flex flex-col gap-3'>
            <span className='font-bold text-white'>Services</span>
            <Link
              href='/life-insurance/term-life-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Life Insurance
            </Link>
            <Link
              href='/life-insurance/critical-illness-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Critical Illness Insurance
            </Link>
            <Link
              href='/life-insurance/disability-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Disability Insurance
            </Link>
            <Link
              href='/life-insurance/health-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Health Insurance
            </Link>
            <Link
              href='/investments/rrsp'
              className='cursor-pointer text-white text-sm'
            >
              RRSP/TFSA
            </Link>
          </div>

          <div className='flex flex-col gap-3'>
            <span className='font-bold text-[#3D4351]'>Services</span>
            <Link
              href='/visitor-canada'
              className='cursor-pointer text-white text-sm'
            >
              Visitor to Canada
            </Link>
            <Link
              href='/super-visa-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Super Visa Insurance
            </Link>
            <Link
              href='/travel-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Travel Insurance
            </Link>
            <Link
              href='/international-student-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Intl Student Insurance
            </Link>
            <Link
              href='/investments/resp'
              className='cursor-pointer text-white text-sm'
            >
              RESP
            </Link>
          </div>

          <div className='flex flex-col gap-3'>
            <span className='font-bold text-[#3D4351]'>Services</span>

            <Link
              href='/home-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Home Insurance
            </Link>
            <Link
              href='/auto-insurance'
              className='cursor-pointer text-white text-sm'
            >
              Auto Insurance
            </Link>
            <Link
              href='/about-us'
              className='cursor-pointer text-white text-sm'
            >
              About Us
            </Link>
            <Link
              href='/resources'
              className='cursor-pointer text-white text-sm'
            >
              Resources
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='font-bold text-white'>Contact Us</span>
          <span className=' text-white'>vidya@insurancebuzz.ca</span>
          <span className=' text-white'>+1(647)469-8766</span>

          <div className='flex gap-3 mt-5 items-center'>
            <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-facebook-official cursor-pointer'
              aria-hidden='true'
            ></i>
            {/* <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-twitter-square cursor-pointer'
              aria-hidden='true'
            ></i> */}
            <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-linkedin-square cursor-pointer'
              aria-hidden='true'
            ></i>
            <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-whatsapp cursor-pointer'
              aria-hidden='true'
            ></i>
            <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-instagram cursor-pointer'
              aria-hidden='true'
            ></i>
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-14 text-sm text-white flex md:flex-row flex-col gap-5 justify-between'>
        <span>2023 © InsuranceBuzz - All right reserved</span>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
          <span
            onClick={() => router.push('/privacy-policy')}
            className='hover:underline cursor-pointer'
          >
            Term of Service
          </span>
          <span
            onClick={() => router.push('/privacy-policy')}
            className=' hover:underline cursor-pointer'
          >
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  )
}

export default MainFooter
