import React from "react";
import {  Collapse } from "antd";
import { termLifeInsuranceItems } from "@/data/faqs/term-life-insurance";


const TermInsurance = ({color}) => {
  return (
    <>
      <div
        id="term-insurance"
        className="p-4"
        style={{ minHeight: "100vh", background: `${color}` }}
      >
        <h1 className="text-white font-bold text-2xl">Term Insurance FAQs</h1>
        <Collapse
          ghost
          items={termLifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default TermInsurance;
