import React from "react";
import { HiArrowCircleUp } from "../../../constant/icons";

export default function AnalyticsCard({ title, activeCard, setActiveCard }) {
  return (
    <div
      className={`py-7 -mt-[1px] border-b border-t border-r border-gray-200 first:border-l ${
        activeCard === title ? "active-card" : ""
      }  cursor-pointer`}
      onClick={() => setActiveCard(title)}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="flex items-center justify-center gap-1 my-[.5px]">
          <span className="text-3xl font-medium">20</span>
          <HiArrowCircleUp fontSize={22} color="green" className="rotate-180" />
        </p>
      </div>
      <div className="text-xs font-medium text-gray-600 text-center">50% increasing rate</div>
    </div>
  );
}
