import React from "react";
import {  Collapse } from "antd";
import { travelInsuranceItems } from "@/data/faqs/travel-insurance";


const TravelInsurance = ({color}) => {
  return (
    <>
      <div
        className="p-4"
        id="travel-insurance"
        style={{ minHeight: "100vh", background: `${color}` }}
      >
        <h1 className="text-white font-bold text-2xl">Travel Insurance FAQs</h1>
        <Collapse
          ghost
          items={travelInsuranceItems}
        />
      </div>
    </>
  );
};

export default TravelInsurance;
