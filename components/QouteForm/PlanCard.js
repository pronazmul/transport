import React from "react";

const PlanCard = ({qoute}) => {
    
  return (
    <>
      <div className="p-5 shadow-md rounded-md flex items-center justify-evenly mb-5 border">
        <div className="flex items-center justify-evenly gap-4 flex-grow">
          <div className="w-[150px]">
            <img src={qoute.logo} alt="logo"/>
          </div>
          <div>
            <div className="text-center">
              <span className="text-sm">$</span>
              <span className="text-2xl font-medium">{String(qoute?.cost).split('.')[0]}</span>
              <span className="text-sm">.{String(qoute?.cost).split('.')[1]}/month</span>
            </div>
            <hr />
            <div className="text-center">
              <p className="text-sm">or Annually $979.20</p>
              <p className="text-sm">Deductible {qoute.deductible} per claim</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white">
            Buy Now
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-900 text-white">
            Plan Details
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
