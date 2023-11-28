/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsCheck2Circle } from "../../constant/icons";
import RadiulProgressBar from "./RadiulProgressBar";

export default function Monitization() {
  return (
    <div>
      <header>
        <h2 className="text-3xl font-semibold">Monitization</h2>
        <p className="text-sm text-gray-600">You'll be eligible to earn money from your videos</p>
      </header>
      <div>
        <p className="font-medium my-2">Monitization requirements</p>
        <div className="grid grid-cols-2 gap-2 w-[80%]">
          <div className="flex items-center gap-4 bg-gray-50 py-8 pl-8">
            <RadiulProgressBar />
            <div>
              <p className="font-semibold">0 followers</p>
              <p className="text-sm -mt-1 text-gray-600">1,000 required</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 py-8 pl-8">
            <RadiulProgressBar />
            <div>
              <h2 className="font-semibold">0 public watch hours</h2>
              <p className="text-sm -mt-1 text-gray-600">4,000 required</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 py-8 pl-8">
            <BsCheck2Circle fontSize={28} color="green" />
            <div>
              <h2 className="font-semibold">2-Step Verification</h2>
              <p className="text-sm -mt-1 text-gray-600">Passive</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 py-8 pl-8">
            <BsCheck2Circle fontSize={28} color="green" />
            <div>
              <h2 className="font-semibold">0 active Community Guidlines strikes</h2>
              <p className="text-sm -mt-1 text-gray-600">Ineligible if you have active strikes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
