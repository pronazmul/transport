import { CoverageDetail } from "@/components/CoverageDetail";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { visitorCanadaInsuranceItems } from "@/data/faqs/visitor-canada-insurance";
import { Collapse } from "antd";
const VisitorCanada = () => {
  return (
    <>
      <HeroSection
        heading={"Visitor to Canada Insurance"}
        para={`Visitors to Canada insurance pertains to travel coverage designed to
            safeguard individuals during their visits to Canada. Consider it a
            safety precaution against unforeseen events during their trip. This
            insurance aids in covering expenses such as medical care or hospital
            stays if they fall ill, as well as covering additional hotel stays
            in case their return flight is canceled.`}
        img={"/images/sub/visitor.jpeg"}
        color={"#04345CCC"}
        position="10% 45%"
      />

      <div className="relative top-[-165px]">
        <CoverageDetail />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold">Visitors to Canada</h1>
          <p className="text-gray-700 text-md">
            Visitors to Canada insurance, also known as travel insurance for
            visitors, serves as a form of protection for individuals visiting
            Canada. Consider it as a safety precaution in case unforeseen
            circumstances arise during their journey. This insurance provides
            coverage for expenses such as medical consultations or hospital
            stays in the event of illness, as well as covering additional
            accommodation costs in case of flight cancellations, ensuring
            visitors have peace of mind during their stay.
          </p>
        </div>

        <div className="space-y-2 mb-10">
          <h2 className="font-bold">Points to Remember</h2>
          <ul className="list-disc ml-6">
            <li>
              Canadian visitors' insurance encompasses various forms of travel
              insurance protection.
            </li>
            <li>
              This insurance can address unforeseen and non-reimbursable
              expenses related to your visit to Canada.
            </li>
            <li>
              The pricing of your insurance plan is influenced by variables such
              as age, duration of the trip, and the chosen deductible.
            </li>
          </ul>
        </div>
      </div>

      <div
        className="p-5 relative top-[-60px]"
        id="life-insurance"
        style={{ background: "#04345CCC" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
          Visitor to Canada Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={visitorCanadaInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default VisitorCanada;
