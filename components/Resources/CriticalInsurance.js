import React from 'react'
import { Collapse } from 'antd'
import { criticalIllnessItems } from '@/data/faqs/critical-illness-insurance'

const CriticalInsurance = ({ color }) => {
  return (
    <>
      <div
        id='critical-insurance'
        className='p-4'
        style={{ minHeight: '100vh', background: `${color}` }}
      >
        <h1 className='text-white font-bold text-2xl'>
          Critical Illness Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={criticalIllnessItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  )
}

export default CriticalInsurance
