import { CoverageDetail } from "@/components/CoverageDetail";
import { Collapse } from "antd";

import { HeroSection } from "@/components/HeroSection/HeroSection";
import { criticalIllnessItems } from "@/data/faqs/critical-illness-insurance";
const CriticalillnessPage = () => {
  return (
    <>
      <HeroSection
        img="/images/sub/critical.jpeg"
        heading={"Critical Illness Insurance"}
        para={` Critical illness insurance offers extra protection for unforeseen
            medical crises such as heart attacks, strokes, or cancer. Given that
            these situations often result in higher-than-normal medical
            expenses, these policies provide monetary payouts to assist in
            covering these excess costs when conventional health insurance might
            not be sufficient.`}
        color={"#308b84cc"}
        position="top"
      />

      <div className="relative top-[-165px]">
        <CoverageDetail />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold">Critical Illness Insurance</h1>
          <p className="text-sm text-gray-700">
            Critical illness insurance entails a contract established with a
            life insurance company, entitling you to receive a tax-free lump sum
            if you are diagnosed with a severe and life-threatening ailment. In
            contrast to life insurance, the primary purpose of critical illness
            insurance is not to offer prolonged financial assistance to your
            family after your demise. Instead, it serves to provide financial
            aid during your recuperation from a critical illness.
          </p>
        </div>
        <div className="space-y-2 mb-10">
          <h2 className="font-bold">Points to Remember</h2>
          <ul className="list-disc ml-6">
            <li>
              With critical illness insurance, when you receive a diagnosis for
              a critical illness, you will receive a single, tax-free lump sum
              of money.
            </li>
            <li>
              This tax-free payout can be utilized for any purpose you choose.
            </li>
            <li>
              Critical illness insurance proves valuable if you require
              financial assistance beyond hospital care, such as long-term
              recovery or specialized treatment abroad.
            </li>
          </ul>
        </div>
      </div>

      <div
        className="p-5 relative top-[-50px]"
        id="life-insurance"
        style={{ background: "#308b84" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
          Critical Illness Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={criticalIllnessItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default CriticalillnessPage;
