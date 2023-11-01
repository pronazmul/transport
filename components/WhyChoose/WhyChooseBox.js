import React from 'react'

const WhyChooseBox = ({ image, title, description }) => {
  return (
    <div className='flex flex-col gap-2 pr-5 py-5'>
      <img src={image} alt='face' className='w-[60px] mb-3' />
      <span className='font-bold text-xl' style={{ color: '#FFDB58' }}>
        {title}
      </span>
      <span className='text-base text-gray-200'>{description}</span>
    </div>
  )
}

export default WhyChooseBox
