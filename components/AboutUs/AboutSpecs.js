import React from 'react'

const AboutSpecs = ({ heading, para }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-2 items-center'>
        <i style={{ fontSize: "19px", color: '#3A6B33' }} className="fa fa-check-circle" aria-hidden="true"></i>
        <span className='font-semibold'>{heading}</span>
      </div>

      <span>{para}</span>
    </div>
  )
}

export default AboutSpecs
