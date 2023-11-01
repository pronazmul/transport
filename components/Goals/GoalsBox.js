import React from 'react'

const GoalsBox = ({ text1, text2, diff }) => {
  return (
    <div className={`flex flex-col ${diff ? 'text-white' : 'text-black'} gap-1 p-4 ${diff ? 'bg-[#000080]' : 'bg-[#FFD700]'}`}>
      <span className=' font-semibold text-[18px]'>{text1}</span>
      <span>{text2}</span>
    </div>
  )
}

export default GoalsBox
