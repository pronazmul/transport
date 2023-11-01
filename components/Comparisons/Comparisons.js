import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

const Comparisons = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [countingStarted, setCountingStarted] = useState(false)
  const countUpRef = useRef(null)

  const handleIntersection = (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    }

    const observer = new IntersectionObserver(handleIntersection, options)
    observer.observe(countUpRef.current)

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && !countingStarted) {
      setCountingStarted(true)
    }
  }, [isVisible, countingStarted])

  return (
    <>
      <div
        className='px-5  xl:px-0 my-16  py-32 after:absolute after:w-full after:h-full after:inset-0
         after:bg-black/10 -z-[11] after:-z-10'
        style={{
          background: 'url(/images/happy-family.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          ref={countUpRef}
          className=' px-5 py-10  xl:max-w-7xl max-w-screen-lg rounded bg-back backdrop-blur-sm  bg-white/75 m-auto opacity-100 z-10'
        >
          <div className='text-center'>
            <h2 className='text-[46px] font-bold'>
              <CountUp
                duration={2}
                preserveValue
                redraw
                start={100}
                end={Math.floor(Math.random() * (500 - 200 + 1) + 400)}
                suffix='+'
              />
            </h2>
            <h4 className='text-xl font-bold'>Comparisons</h4>
            <p className='text-base text-gray-600 mt-1'>
              <b>Individuals</b> have <b>compared rates</b> and achieved{' '}
              <b>savings</b> in the <b>past 24 hours.</b>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comparisons
