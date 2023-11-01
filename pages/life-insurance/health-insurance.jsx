import { CoverageDetail } from "@/components/CoverageDetail";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { healthInsuranceItems } from "@/data/faqs/health-insurance";
import { Collapse } from "antd";

const HealthPage = () => {
  return (
    <>
      <HeroSection
        heading={"Health Insurance - Drug and Dental Plans"}
        para={`Consider health insurance as a safeguard for both your well-being and financial stability. It encompasses costs related to routine healthcare, dental care, and unexpected medical expenses that may not be covered by your provincial or territorial health insurance. Your unique requirements, financial situation, and budget will guide the selection of the most suitable coverage type and level for you. These plans are not only simple to purchase and manage but are also designed for straightforward comprehension.`}
        img={"/images/sub/health.jpeg"}
        color={"#eabd03cc"}
        position="10% 40%"
      />

      <div className="relative top-[-165px]">
        <CoverageDetail />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold">
            Health Insurance
          </h1>
          <p className="text-sm text-gray-700">
            Health insurance, including drug and dental plans, offers coverage
            for prescription medications and dental care expenses. These plans
            are designed to help individuals and families manage the costs
            associated with essential medications and dental treatments. They
            often include various options to choose from, allowing individuals
            to select the level of coverage that best suits their needs and
            budget. Health insurance with drug and dental plans provides
            financial security and access to crucial healthcare services,
            ensuring that individuals can maintain their overall well-being
            without facing substantial financial burdens.
          </p>
        </div>

        <div className="space-y-2 mb-10">
          <h2 className="font-bold">Points to Remember</h2>
          <ul className="list-disc ml-6">
            <li>
              <b> Tailored Coverage:</b> You have the flexibility to create a
              personalized plan by incorporating optional coverages to suit your
              needs, whether it's prescription drug, dental, home care, or a
              combination like prescription drugs and home care along with
              medical equipment.
            </li>
            <li>
              <b>Family Inclusion:</b> Your spouse and dependent children under
              the age of 21 who are not employed can be included in your
              coverage plan.
            </li>
            <li>
              <b>Premium Payment:</b> While you cannot purchase insurance for
              anyone else, including your parents, you do have the option to
              cover the premium on their behalf if you choose
            </li>
          </ul>
        </div>
      </div>

      <div
        className="p-5 relative top-[-90px]"
        id="life-insurance"
        style={{ background: "#eabd03" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
          Health Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={healthInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default HealthPage;
