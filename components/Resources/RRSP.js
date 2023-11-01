import React from "react";
import {  Collapse } from "antd";
import { rrspInsuranceItems } from "@/data/faqs/rrsp";
const RRSP = ({color}) => {
  return (
    <>
      <div
        id="rrsp"
        className="p-4"
        style={{ minHeight: "100vh", background: `${color}` }}
      >
        <h1 className="text-white font-bold text-2xl">RRSP Insurance FAQs</h1>
        <Collapse
          ghost
          items={rrspInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default RRSP;
