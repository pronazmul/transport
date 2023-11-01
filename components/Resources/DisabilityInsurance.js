import React from 'react'
import { Collapse } from 'antd'
import { disabilityInsuranceItems } from '@/data/faqs/disability-insurance'
const DisabilityInsurance = ({ color }) => {
  return (
    <>
      <div
        id='disability-insurance'
        className='p-4'
        style={{ minHeight: '100vh', background: `${color}` }}
      >
        <h1 className='text-white font-bold text-2xl'>
          Disability Insurance FAQs
        </h1>
        <Collapse ghost items={disabilityInsuranceItems} />
      </div>
    </>
  )
}

export default DisabilityInsurance
