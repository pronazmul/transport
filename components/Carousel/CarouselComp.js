import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] `}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )} style={{ height: '70vh' }} className="">
      <div className="relative h-full bg-[#45A1D3CC] w-full">
        {/* <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        /> */}
        {/* <video src="/4 second video.mp4" controls className="h-full w-full rounded-lg" autoPlay>
          
          Your browser does not support the video tag.
        </video> */}
        <div className="absolute p-10 py-44 pt-52 inset-0 grid h-full w-full bg-black/75">
          <div className="w-4/4 md:w-2/4 flex flex-col gap-2 px-14">
            <span className="sm:text-[50px] text-[40px] font-semibold text-white">Life Insurance</span>

            <span className="text-white opacity-95 text-base">We have access to majority of the first-rate insurance companies in Canada to offer you the best coverage at the lowest available price</span>
            <div className="flex gap-2 mt-6">
              <button style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>


            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">

        <div className="absolute p-7 inset-0 grid h-full w-full bg-black/75">
          <div className="w-3/4 md:w-2/4 flex flex-col gap-2 px-14">
            <span className="sm:text-[50px] text-[40px] font-semibold text-white">Life Insurance</span>

            <span className="text-white opacity-95 text-base">We have access to majority of the first-rate insurance companies in Canada to offer you the best coverage at the lowest available price</span>
            <div className="flex gap-2 mt-6">
              <button style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>


            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">

        <div className="absolute p-7 inset-0 grid h-full w-full bg-black/75">
          <div className="w-3/4 md:w-2/4 flex flex-col gap-2 px-14">
            <span className="sm:text-[50px] text-[40px] font-semibold text-white">Life Insurance</span>

            <span className="text-white opacity-95 text-base">We have access to majority of the first-rate insurance companies in Canada to offer you the best coverage at the lowest available price</span>
            <div className="flex gap-2 mt-6">
              <button style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>


            </div>
          </div>
        </div>
      </div>

    </Carousel >
  );
}