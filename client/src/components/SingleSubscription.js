import React from "react";
import { Link } from "react-router-dom";
import { GiCheckMark, SlDiamond } from "../constant/icons";

export default function SingleSubscription({ item }) {
  const { plan, amount, version } = item;

  const seletColor = () => {
    if (plan === "Career") return "text-black border-2 border-black";
    return "bg-[#f5c556] border-2 border-[#f5c556] text-white";
  };

  const seletIconColor = () => {
    if (plan === "Career") return "text-black";
    return "text-[#f5c556]";
  };

  return (
    <div>
      <div className="bg-white hover:bg-blue-50 w-[340px] shadow-xl rounded-lg shadow-gray-200 p-6 cursor-pointer">
        <header className="relative p-2 pt-7 flex items-center gap-2">
          <div>
            <SlDiamond fontSize={32} className={`${seletIconColor()} -rotate-12`} />
          </div>
          <div className="leading-4">
            <h3 className={`text-4xl font-semibold ${plan !== "Standard" ? "text-black" : "text-white"}`}>{plan}</h3>
            <div className={`flex items-end text-black `}>
              <span className="mb-auto mt-[2px]">$</span>
              <p className="text-xl font-bold">{amount}</p>
              <span className="text-xs">/user</span>
            </div>
          </div>
          <button
            type="button"
            className={`absolute top-[-10px] right-[-10px] py-1 px-4 rounded-3xl text-sm ${seletColor()}`}
          >
            {version}
          </button>
        </header>

        <div className="my-4">
          <div className="flex items-center gap-3 py-2 px-1">
            <GiCheckMark className={`${seletIconColor()}`} />
            <p className="text-black">{item.feature1}</p>
          </div>
          <div className="flex items-center gap-3 py-2 px-1">
            <GiCheckMark className={`${seletIconColor()}`} />
            <p className="text-black">{item.feature2}</p>
          </div>
          <div className="flex items-center gap-3 py-2 px-1">
            <GiCheckMark className={`${seletIconColor()}`} />
            <p className="text-black">{item.feature3}</p>
          </div>
        </div>
        <Link to="/analytics">
          <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3">
            Choose Plan
          </button>
        </Link>
      </div>
    </div>
  );
}
