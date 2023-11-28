import React, { useState } from "react";
import { IoMdArrowDropdown } from "../../../constant/icons";
import AnalyticsCard from "./AnalyticsCard";
import GraphBox from "./GraphBox";

export default function Analytics() {
  const [activeCard, setActiveCard] = useState("Videos");
  return (
    <div>
      <header className="py-2 flex items-start justify-between">
        <h2 className="text-3xl font-semibold">Analytics</h2>
        <div className="flex items-center gap-3">
          <div>
            <p className="text-xs font-medium text-gray-500">Dec 12 - 18, 2022</p>
            <p>Last 7 days</p>
          </div>
          <IoMdArrowDropdown fontSize={20} />
        </div>
      </header>
      <div className="mt-3">
        <div className="grid grid-cols-3">
          <AnalyticsCard title="Videos" activeCard={activeCard} setActiveCard={setActiveCard} />
          <AnalyticsCard title="Watch Time" activeCard={activeCard} setActiveCard={setActiveCard} />
          <AnalyticsCard title="Impressions" activeCard={activeCard} setActiveCard={setActiveCard} />
        </div>
        <GraphBox />
      </div>
    </div>
  );
}
