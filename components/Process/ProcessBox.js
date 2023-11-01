import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const ProcessBox = ({ text1, text2 }) => {
  return (
    <Disclosure
      as={"div"}
      className={` text-black p-4 rounded-md bg-white shadow-[0px_7px_10px_rgba(0,0,0,0.15)]`}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between gap-3 w-full">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
                />
              </svg>
              <span className=" font-semibold text-[18px]">{text1}</span>
            </div>

            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-black`}
            />

          </Disclosure.Button>
          <Disclosure.Panel className={"text-gray-600 mt-5"}>
            {text2}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ProcessBox;