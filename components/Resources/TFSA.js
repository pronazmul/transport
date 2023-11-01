import React from "react";
import {  Collapse } from "antd";
import { tfsaInsuranceItems } from "@/data/faqs/tfsa";

const TFSA = ({color}) => {
  return (
    <>
      <div
        id="tfsa"
        className="p-4"
        style={{ minHeight: "100vh", background: `${color}`}}
      >
        <h1 className="text-white font-bold text-2xl">TFSA Insurance FAQs</h1>
        <Collapse
          ghost
          items={tfsaInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default TFSA;
