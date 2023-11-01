import React from "react";
import {  Collapse } from "antd";
import { visitorCanadaInsuranceItems } from "@/data/faqs/visitor-canada-insurance";

const VisitorCanada = ({color}) => {
  return (
    <>
      <div
        id="critical-insurance"
        className="p-4"
        style={{ minHeight: "100vh", background: `${color}` }}
      >
        <h1 className="text-white font-bold text-2xl">
        Visitor to Canada Insurance
        </h1>
        <Collapse
          ghost
          items={visitorCanadaInsuranceItems}
        />
      </div>
    </>
  );
};

export default VisitorCanada;
