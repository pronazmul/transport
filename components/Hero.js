'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { useRouter } from 'next/router'
import CoverageBox from '../components/Coverages/CoverageBox'

const Hero = () => {
  const [sticky, setSticky] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [router.asPath])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: '1343px' }],
  }
  return (
    <>
      <div className='bg-[#45A1D3CC] pt-44'>
        <div className=' h-full max-w-7xl m-auto flex flex-col gap-5 py-4 xl:px-0 px-10 pb-22 '>
          <div>
            {/* Slider */}
            <Slider {...settings}>
              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[40px] text-[20px] font-bold text-white'>
                  Life Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  Where Your Legacy Begins, Safeguarding Generations Ahead.
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    onClick={() => router.push('/life-insurance')}
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[40px] text-[40px] font-bold text-white'>
                  Travel Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  Remember to include your travel Insurance in your packing. You
                  can get your price estimates online right away.
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    onClick={() => router.push('/travel-insurance')}
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Start Your Trip
                  </button>
                </div>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[40px] text-[40px] font-bold text-white'>
                  Super Visa Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  Your Passport to Peace of Mind and Family Reunions.
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    onClick={() => router.push('/super-visa-insurance')}
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[40px] text-[40px] font-bold text-white'>
                  Home Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  Safeguarding What Matters Most - Your Home, Your Peace of
                  Mind.
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    onClick={() => router.push('/home-insurance')}
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[40px] text-[40px] font-bold text-white'>
                  Auto Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  Auto Insurance That Travels the Extra Mile for You.
                  <br />
                  Ride with Confidence, Backed by Our Auto Insurance.
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    onClick={() => router.push('/auto-insurance')}
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[40px] text-[40px] font-bold text-white'>
                  TFSA and RRSP Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  Secure Your Tomorrow with RRSP &amp; TFSA – Where Smart
                  Investing Meets Tax Benefits.
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    onClick={() => router.push('/investments/rrsp')}
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* Services */}
        <div className='grid xl:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-5 sm:px-20 px-10 py-10'>
          <CoverageBox
            onClick={() => router.push('/life-insurance')}
            image={'/images/new/life-new.jpeg'}
            position='80% 10%'
            text={'Life Insurance'}
          />
          <CoverageBox
            onClick={() => router.push('/travel-insurance')}
            image={'/images/sub/travel-new.png'}
            text={'Travel Insurance'}
            position='10% 4%'
          />
          <CoverageBox
            onClick={() => router.push('/auto-insurance')}
            image={'/images/new/auto-insurance.jpeg'}
            position='50% 40%'
            text={'Auto Insurance'}
          />
          <CoverageBox
            onClick={() => router.push('/home-insurance')}
            image={'/images/new/home-insurance.jpg'}
            position='50% 40%'
            text={'Home Insurance'}
          />
          <CoverageBox
            onClick={() => router.push('/super-visa-insurance')}
            image={'/images/new/super-visa.jpeg'}
            text={'Super Visa Insurance'}
          />
          <CoverageBox
            onClick={() => router.push('/visitor-canada')}
            image={'/images/new/visitor.png'}
            text={'Visitor to Canada'}
          />
          <CoverageBox
            onClick={() => router.push('/life-insurance/health-insurance')}
            image={'/images/sub/health-new.jpeg'}
            text={'Health Insurance'}
            position='10% 20%'
          />
          <CoverageBox
            onClick={() =>
              router.push('/life-insurance/critical-illness-insurance')
            }
            image={'/images/new/critical-illness.jpg'}
            text={'Critical Illness Insurance'}
            position='25% 10%'
          />
          <CoverageBox
            onClick={() => router.push('/international-student-insurance')}
            image={'/images/new/intl-new.jpg'}
            text={'Intl student Insurance'}
          />
          <CoverageBox
            onClick={() => router.push('/investments/rrsp')}
            image={'/images/new/rrsp.jpeg'}
            text={'RRSP / TFSA'}
          />
          <CoverageBox
            onClick={() => router.push('/investments/resp')}
            image={'/images/new/resp-new.jpeg'}
            text={'RESP'}
            position='10% 20%'
          />
          <CoverageBox
            onClick={() => router.push('/life-insurance/disability-insurance')}
            image={'/images/new/disability-insurance.jpeg'}
            text={'Disability Insurance'}
            position='10% 10%'
          />
        </div>
      </div>
    </>
  )
}

export default Hero
