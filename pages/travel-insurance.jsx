import { CoverageDetail } from "@/components/CoverageDetail";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Collapse } from "antd";

import { travelInsuranceItems } from "@/data/faqs/travel-insurance";
const TravelInsurancePage = () => {
  return (
    <>
      <HeroSection
        heading={"Travel Insurance"}
        para={`Travel insurance is a form of insurance designed to assist in
            covering medical expenses in the event of illness or injury while
            traveling. Additionally, it provides protection against financial
            losses stemming from trip cancellations or interruptions.`}
        color={"#252835cc"}
        img={"/images/sub/travel.jpg"}
      />

      <div className="relative top-[-165px]">
        <CoverageDetail />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold">Travel Insurance</h1>
          <p className="text-sm text-gray-700">
            Snowbird travel insurance is a specialized insurance product crafted
            for Canadians who embark on extended journeys beyond their home
            province or territory. Typically, this insurance caters primarily to
            seniors, as they form the predominant demographic among snowbirds.
            Each year, numerous Canadians bid farewell to the frigid embrace of
            the Great White North as they commence lengthy journeys abroad to
            evade the harsh winter chill. However, akin to numerous wanderers,
            the matter of insurance might not even cross the minds of these
            snowbirds until they find themselves on the airplane. Regrettably,
            by that point, it could be too late. While travel insurance can
            offer sufficient coverage for unexpected expenses on shorter trips,
            the question arises: what do Canadians turn to for tranquility when
            they find themselves spending extended periods overseas? This
            article will delve deeply into how snowbirds can ensure they have
            adequate coverage should they encounter unforeseen emergencies
            during their absence from home.
          </p>
        </div>

        <div className="space-y-1">
          <h1 className="font-bold">Points to Remember</h1>

          <ul className="list-disc ml-4">
            <li className="">
              Travel coverage comes in two forms: travel medical insurance and
              trip interruption/cancellation coverage.
            </li>
            <li className="">
              Travel medical insurance holds greater importance because medical
              costs overseas can escalate significantly during emergencies while
              you are abroad.
            </li>
            <li>
              Several comprehensive travel coverage choices are available from
              major insurance providers in Canada.
            </li>
          </ul>
        </div>
      </div>

      <div
        className="p-5 relative top-[-60px]"
        id="life-insurance"
        style={{ background: "#ED8B09" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
          Travel Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={travelInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default TravelInsurancePage;
