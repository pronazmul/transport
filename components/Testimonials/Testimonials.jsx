import { UserIcon } from '@heroicons/react/24/outline'
import Slider from 'react-slick'

const testimonials = [
  {
    id: 4,
    image: '/images/testimonials/Kiranveer.jpg',
    name: 'Kiranveer',
    title: '',
    body: 'The life insurance policy provided me with a sense of security and financial protection, in case of any events. I was pleased, with the to understand procedures and helpful guidance I received from Vidya.',
  },
  {
    id: 5,
    image: '/images/testimonials/Rahul Kolte.jpg',
    name: 'Rahul Kolte',
    title: 'CEO of Workcation',
    body: 'My insurance advisor was extremely knowledgeable and patient. They took the time to explain all the options to me and helped me find the perfect coverage for my needs. I highly recommend them.',
  },
  {
    id: 1,
    image: '/images/testimonials/Shweta A.jpg',
    name: 'Shweta Appannavar',
    title: 'CEO of Workcation',
    body: "I had the pleasure of working with an insurance advisor who truly displayed a level of professionalism. They effortlessly explained the intricacies of insurance. Even assisted me in finding ways to save money on my policies. I am extremely satisfied, with their services. Couldn't be happier.",
  },
  {
    id: 2,
    image: '/images/testimonials/Shradhha.jpg',
    name: 'Shradhha Shah',
    title: 'CEO of Workcation',
    body: "I was really impressed, by the application process, great prices and outstanding customer service provided by Insurance Buzz. It gave me a sense of confidence and security throughout my trip. I can't imagine going on my adventure without their services!",
  },
  {
    id: 3,
    image: '/images/testimonials/Aditi k.jpg',
    name: 'Aditi K',
    title: 'CEO of Workcation',
    body: 'I chose Vidya from InsuranceBuzz as my advisor because their process is hassle free and they understood my needs. Their personalized solution perfectly aligns with my lifestyle. I would highly recommend her to others.',
  },
  {
    id: 6,
    image: '/images/testimonials/Pratik C.jpg',
    name: 'Pratik Chougule',
    title: 'CEO of Workcation',
    body: 'InsuranceBuzz is more, than an advisor. They are a partner, in my financial planning. Their knowledge and guidance have proven invaluable in assisting me with making informed choices regarding my insurance requirements.',
  },
]

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [{ breakpoint: '1343px' }],
  }
  return (
    <div className='mt-10 '>
      <div className=' text-center container mx-auto overflow-hidden'>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className='bg-white my-20'>
              <div className='bg-[#61b1e7]  pb-20 sm:pb-24 xl:pb-0 rounded-md'>
                <div className='mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch'>
                  <div className='-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none'>
                    <div className='relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto'>
                      <img
                        className='absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'
                        src={testimonial.image}
                        alt='testimonial images'
                      />
                    </div>
                  </div>
                  <div className='w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24'>
                    <figure className='relative isolate pt-6 sm:pt-12'>
                      <svg
                        viewBox='0 0 162 128'
                        fill='none'
                        aria-hidden='true'
                        className='absolute left-0 top-0 -z-10 h-32 stroke-white/20'
                      >
                        <path
                          id='b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
                          d='M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z'
                        />
                        <use
                          href='#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
                          x={86}
                        />
                      </svg>
                      <blockquote className='text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9'>
                        <p>{testimonial.body}</p>
                      </blockquote>
                      <figcaption className='mt-8 text-base'>
                        <div className='font-semibold text-white flex items-center justify-center gap-3'>
                          <UserIcon
                            className='bg-gray-200 rounded-full p-2'
                            width={35}
                            color='black'
                          />
                          <span> {testimonial.name}</span>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
