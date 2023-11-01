import React from "react";
import {  Collapse } from "antd";
import { claimInsuranceItems } from "@/data/faqs/claim-insurance";

const ClaimProcess = ({color}) => {
  return (
    <>
      <div
        id="critical-insurance"
        className="p-4"
        style={{ minHeight: "100vh", background: `${color}` }}
      >
        <h1 className="text-white font-bold text-2xl">
          Claim Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={claimInsuranceItems}
        />
      </div>
    </>
  );
};

export default ClaimProcess;
