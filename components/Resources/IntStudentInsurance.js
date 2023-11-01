import React from 'react'
import { Collapse } from 'antd'
import { internationalStudentsInsuranceFAQs } from '@/data/faqs/international-student-insurance'
const IntStudentInsurance = ({ color }) => {
  return (
    <>
      <div
        className='p-4'
        id='international-students-insurance'
        style={{ minHeight: '100vh', background: `${color}` }}
      >
        <h1 className='text-white font-bold text-2xl'>
          International Student Insurance FAQs
        </h1>
        <Collapse ghost items={internationalStudentsInsuranceFAQs} />
      </div>
    </>
  )
}

export default IntStudentInsurance
