import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const InsuranceSolutions = ({ image,  countNumber, suffix, title }) => {

  const [isVisible, setIsVisible] = useState(false);
  const [countingStarted, setCountingStarted] = useState(false);
  const countUpRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(countUpRef.current);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !countingStarted) {
      setCountingStarted(true);
    }
  }, [isVisible, countingStarted]);




  return (
    <div ref={countUpRef} className='flex gap-3 items-center'>

      <div className='flex item-center justify-center'>
        <img src={image} alt="boximg" />
      </div>

      <div className='flex flex-col'>
        <span className='text-[29px] font-semibold'>
          <CountUp end={countNumber} suffix={suffix} duration={5} preserveValue redraw /></span>
        <span className='text-[16px] font-semibold tracking-wide text-gray-800'>{title}</span>
      </div>

    </div>
  )
}

export default InsuranceSolutions
