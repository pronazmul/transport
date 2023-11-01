import React from 'react';

const CoverageBox = ({ image, text, onClick, position = 'center' }) => {
  return (
    <div
      onClick={onClick}
      className='flex flex-col items-center justify-between rounded bg-white shadow-lg cursor-pointer hover:transition-all hover:scale-105'
    >
      <div
        className='h-[150px] w-[100%]'
        style={{
          background: `url(${image})`,
          backgroundPosition: position,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
      ></div>
      <p className='px-3 py-4 text-xs'>{text}</p>
    </div>
  );
};

export default CoverageBox;
