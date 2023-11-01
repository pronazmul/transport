import React, { useRef, useEffect, useState } from 'react';
import Sliders from 'react-slick';

const TravelSlider = () => {
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState('1');

  useEffect(() => {
    // Check window width and set the number of slides per view
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setSwiperSlidesPerView('5');
      } else if (window.innerWidth > 772) {
        setSwiperSlidesPerView('4');
      } else if (window.innerWidth > 500) {
        setSwiperSlidesPerView('2');
      } else {
        setSwiperSlidesPerView('1');
      }
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();
    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: Number(swiperSlidesPerView), // Convert to a number
    slidesToScroll: 1, // Corrected property name
    swipeToSlide: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  // style={{ filter: 'grayscale(1)' }}
  return (
    <div className='overflow-hidden'>
      <Sliders {...settings}>
        <div>
          <img
            width={160}
            src='/images/new/logos/travel-logo1.jpg'
            alt='logo'
          />
        </div>
        <div>
          <img
            width={160}
            src='/images/new/logos/travel-logo2.jpg'
            alt='logo'
          />
        </div>
        <div>
          <img
            width={160}
            src='/images/new/logos/travel-logo3.jpg'
            alt='logo'
          />
        </div>
        <div>
          <img
            width={160}
            src='/images/new/logos/travel-logo4.png'
            alt='logo'
          />
        </div>
        <div>
          <img
            width={160}
            src='/images/new/logos/travel-logo5.jpg'
            alt='logo'
          />
        </div>
        <div>
          <img
            width={160}
            src='/images/new/logos/travel-logo6.png'
            alt='logo'
          />
        </div>
        <div>
          <img width={160} src='/travel/travel1.jpg' alt='travel' />
        </div>
        <div>
          <img width={160} src='/travel/travel2.jpg' alt='travel' />
        </div>
        <div>
          <img width={160} src='/travel/travel3.jpg' alt='travel' />
        </div>
        <div>
          <img width={160} src='/travel/travel4.jpg' alt='travel' />
        </div>
        <div>
          <img width={160} src='/travel/travel5.jpg' alt='travel' />
        </div>
        <div>
          <img width={160} src='/travel/travel6.jpg' alt='travel' />
        </div>
      </Sliders>
    </div>
  );
};

export default TravelSlider;
