export const HeroSection = ({
  img,
  heading,
  para,
  color,
  position = 'center',
}) => {
  return (
    <div
      className=' relative top-[-165px]'
      style={{
        background: `url(${img})`,
        backgroundPosition: position,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
    >
      <div
        style={{ backgroundColor: color }}
        className={`flex flex-col items-center justify-center gap-3 py-52 pb-24`}
      >
        <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
          {heading}
        </span>
        <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto line-clamp-3'>
          {para}
        </span>
      </div>
    </div>
  )
}
