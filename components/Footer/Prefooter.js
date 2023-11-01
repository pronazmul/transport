import React from "react";
import {  Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

const Prefooter = () => {
  const router = useRouter();
  return (
    <div className="bg-[#315FA9] py-16 pb-28 px-5 ">
      <div className="flex lg:flex-row flex-col justify-between gap-5 max-w-7xl  m-auto sm:pr-20">
        <div className="flex flex-col gap-2 flex-1 max-w-xl">
          <span className="font-semibold text-[32px] text-white ">
            Get Started with us today.
          </span>
          <span className="text-base font-normal text-white">
            We're committed to safeguarding your present and future. Our
            comprehensive coverage and passionate professionals prioritize your
            protection.
          </span>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => router.push("/contact")}
            className=" text-black bg-[#FFD700] px-4 md:px-6 py-3 md:py-4 right-1 top-1 rounded"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
