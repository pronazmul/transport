import React from 'react';
import GoalsBox from './GoalsBox';

const GoalsAndMissions = () => {
  return (
    // <div className='bg-[#62B1BCE5] px-3 py-5 pb-10'>
    <div className='px-3 py-5 pb-10'>
      <div className='flex flex-col md:items-end mt-10  max-w-7xl m-auto'>
        <span className='bg-[#000080] mr-0 lg:mr-[450px] text-white w-fit p-[0.35rem] mb-6'>
          Our Goals and Mission 
        </span>
        <span className='font-[700] text-[30px] leading-tight sm:w-1/2 text-black'>
          Securing Your Today and Tomorrow Through Expert Insurance Guidance
        </span>

        <div className='flex lg:flex-row flex-col justify-between  mt-3 gap-4'>
          <div className='flex invisible relative flex-1 justify-center'>
            <div className='absolute top-0 right-[16%] z-0'>
              <img src='/images/dots.svg' alt='dots' />
            </div>
            <img
              className=' z-10'
              src='/images/goals.png'
              alt='our-goal-and-mission'
            />
          </div>

          <div className='flex flex-col mt-10 gap-3 flex-1'>
            <GoalsBox
              text1={'At our core'}
              text2={
                'At our core, we prioritize unwavering integrity and professionalism in our interactions with you, our valued client.'
              }
            />
            <GoalsBox
              text1={'Goals'}
              text2={
                'Our primary goal is to gain a comprehensive understanding of your financial situation, enabling us to offer top-notch information, services, and products of the utmost quality. Together, we strive to assist you in achieving your financial objectives'
              }
              diff
            />
            <GoalsBox
              text1={'Mission'}
              text2={
                "At InsuranceBuzz, we understand that insurance buying can be tricky and taxing. Our mission is to bring a difference in people's lives by connecting them to the financial security they can rely on for life. With our insurance advisory services, we help you invest in the right insurance plans that serve as a long-term protection for any unforeseen incident."
              }
            />
          </div>

          {/* <div className='flex  relative flex-1 justify-center'>
            <div className='absolute top-0 right-[16%] z-0'>
              <img src="/images/dots.svg" alt="dots" />
            </div>
            <img className=' z-10' src="/images/goals.png" alt="our-goal-and-mission" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GoalsAndMissions;
