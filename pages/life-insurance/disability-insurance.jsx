import { CoverageDetail } from "@/components/CoverageDetail";
import { Collapse } from "antd";

import { HeroSection } from "@/components/HeroSection/HeroSection";
import { disabilityInsuranceItems } from "@/data/faqs/disability-insurance";
const DisabilityPage = () => {
  return (
    <>
      <HeroSection
        heading={"Disability Insurance"}
        para={` Disability insurance offers protection against income loss caused by
            the inability to work due to either permanent or temporary
            disabilities. This type of insurance assists by replacing a portion
            of your lost income and covering medical expenses in the event of an
            accident resulting in disability.`}
        img={"/images/sub/disability.jpeg"}
        color={"#308b84CC"}
        position="10% 30%"
      />

      <div className="relative top-[-165px]">
        <CoverageDetail />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold">Disability Insurance</h1>
          <p className="text-sm text-gray-700">
            Disability insurance, also known as income protection insurance,
            serves as a financial safeguard that provides coverage against
            income loss by substituting a substantial portion of your salary in
            the event of disability. The insurance provider offering this
            coverage generally commits to replacing 60 to 85 percent of your
            regular income, irrespective of whether the loss of earning capacity
            arises from a sudden accident or a progressive ailment. This
            "benefit" payment is disbursed to you until you achieve a state of
            good health (i.e., resume work) or until the conclusion of your
            disability coverage period – whichever happens first, naturally!
          </p>
        </div>

        <div className="space-y-2 mb-10">
          <h2 className="font-bold">Points to Remember</h2>
          <ul className="list-disc ml-6">
            <li>
              Disability insurance safeguards your income by substituting a
              significant portion of your earnings if you experience injury or
              disability, rendering you unable to work.
            </li>
            <li>
              Disability insurance can be acquired either as part of your
              employer's benefits package, through membership in a group
              association, or as individual coverage from insurance providers.
            </li>
            <li>
              The choice of obtaining individual disability insurance depends on
              your existing coverage and your desire for the highest level of
              available protection.
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
          Disability Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={disabilityInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default DisabilityPage;
