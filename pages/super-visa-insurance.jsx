import { HeroSection } from "@/components/HeroSection/HeroSection";
import SuperVisaQoute from "@/components/SuperVisaQoute";
import { superVisaInsuranceFAQs } from "@/data/faqs/super-visa-insurance";
import { Collapse } from "antd";
const SuperVisa = () => {
  return (
    <>
      <HeroSection
        heading={"Super Visa Insurance"}
        para={`Super visa insurance is a unique form of travel insurance
            exclusively accessible to the parents and grandparents of Canadian
            citizens or residents, enabling extended stays. This insurance
            provides coverage for potential medical emergencies that could arise
            during their visit.`}
        img={"/images/sub/supervisa.jpeg"}
        color={"#989292CC"}
        position="10% 27%"
      />

      <div className="relative top-[-165px] py-20 ">
        <SuperVisaQoute />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold">Super Visa Insurance</h1>
          <p className="text-gray-700 text-md">
            Super visa insurance is a distinct category of travel insurance
            designed exclusively for the extended stay of parents and
            grandparents of Canadian citizens or residents. It provides coverage
            for potential medical emergencies that may occur during their visit.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold">Points to Remember</h2>
          <ul className="list-disc ml-6">
            <li>
              Super visa insurance is a prerequisite for individuals seeking
              entry and prolonged stay in Canada under a super visa.
            </li>
            <li>
              The insurance policy must provide a minimum of $100,000 in
              coverage for a duration of at least 365 days.
            </li>
            <li>
              The policy must be acquired from an insurance company based in
              Canada.
            </li>
          </ul>
        </div>
      </div>

      <div
        className="p-5 relative top-[-60px]"
        id="life-insurance"
        style={{ background: "#989292CC" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
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

export default SuperVisa;
