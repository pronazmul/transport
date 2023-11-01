import React from 'react'
import CoverageBox from './CoverageBox'
import { useRouter } from 'next/router'

const CoverageSlider = () => {
  const router = useRouter()
  return (
    <>
      <div className='grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 sm:px-20 px-10 py-10'>
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
          onClick={() =>
            router.push('/life-insurance/critical-illness-insurance')
          }
          image={'/images/new/critical-illness.jpg'}
          text={'Critical Illness Insurance'}
          position='25% 10%'
        />
        <CoverageBox
          onClick={() => router.push('/life-insurance/disability-insurance')}
          image={'/images/new/disability-insurance.jpeg'}
          text={'Disability Insurance'}
          position='10% 10%'
        />
        <CoverageBox
          onClick={() => router.push('/life-insurance/health-insurance')}
          image={'/images/sub/health-new.jpeg'}
          text={'Health Insurance'}
          position='10% 20%'
        />
      </div>
    </>
  )
}

export default CoverageSlider
