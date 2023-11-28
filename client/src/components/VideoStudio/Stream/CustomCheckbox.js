/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";

export default function CustomCheckbox() {
  const [toggle, setToggle] = useState(false);

  return (
    <label className="flex items-center mt-6" htmlFor="check">
      <span className="text-sm flex-1 font-semibold text-gray-500">Enable auto start</span>
      <div className="flex items-center bg-[#bbb] w-[2rem] h-[1.1rem] rounded-full relative">
        <input id="default-checkbox" type="checkbox" className="invisible" />
        <label
          htmlFor="default-checkbox"
          onClick={() => setToggle(!toggle)}
          className={`absolute top-[-2px] transition-all duration-150 cursor-pointer ${
            toggle ? "left-[15px]" : "left-[-5px]"
          }`}
        >
          <div className="h-[1.3rem] w-[1.3rem] rounded-full bg-blue-500" />
        </label>
      </div>
    </label>
  );
}
