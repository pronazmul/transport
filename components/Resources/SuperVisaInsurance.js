import React from "react";
import {  Collapse } from "antd";
import { superVisaInsuranceFAQs } from "@/data/faqs/super-visa-insurance";



const SuperVisaInsurance = ({color}) => {
  return (
    <>
      <div
        className="p-4"
        id="supervisa-insurance"
        style={{ minHeight: "100vh", background: `${color}` }}
      >
        <h1 className="text-white font-bold text-2xl">
          Super Visa Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={superVisaInsuranceFAQs}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default SuperVisaInsurance;
