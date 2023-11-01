import React, { useRef, useEffect, useState } from 'react';
import Sliders from 'react-slick';

const LifeSlider = () => {
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
    rtl: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  // style={{ filter: 'grayscale(1)' }}
  return (
    <div className='overflow-hidden'>
      <Sliders {...settings}>
        {/* <div>
          <img width={160} src='/images/new/logos/life-logo1.jpg' alt='logo' />
        </div> */}
        <div>
          <img width={160} src='/images/new/logos/life-logo2.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/images/new/logos/life-logo3.jpg' alt='logo' />
        </div>
        <div>
          <img src='/images/new/logos/life-logo4.jpg' alt='logo' />
        </div>
        <div>
          <img width={160} src='/images/new/logos/life-logo5.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/images/new/logos/life-logo6.jpg' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life1.jpeg' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life2.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life4.jpg' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life5.jpg' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life7.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life8.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life9.jpg' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life10.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life11.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life13.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life15.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life16.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life17.png' alt='logo' />
        </div>
        <div>
          <img width={160} height={100} src='/life/life18.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life19.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life20.jpg' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life21.png' alt='logo' />
        </div>
        <div>
          <img width={160} src='/life/life22.png' alt='logo' />
        </div>
      </Sliders>
    </div>
  );
};

export default LifeSlider;
