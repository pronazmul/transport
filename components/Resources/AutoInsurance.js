import React from 'react'
import { Collapse } from 'antd'
import { autoInsuranceItems } from '@/data/faqs/auto-insurance'

const AutoInsurance = ({ color }) => {
  return (
    <>
      <div
        id='critical-insurance'
        className='p-4'
        style={{ minHeight: '100vh', background: `${color}` }}
      >
        <h1 className='text-white font-bold text-2xl'>Auto Insurance FAQs</h1>
        <Collapse ghost items={autoInsuranceItems} />
      </div>
    </>
  )
}

export default AutoInsurance
