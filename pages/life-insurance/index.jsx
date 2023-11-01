"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CoverageDetail } from "@/components/CoverageDetail";
import { useRouter } from "next/router";
import { Collapse } from "antd";
import {
  lifeInsuranceItems,
  lifeInsuranceTableData,
} from "@/data/faqs/life-insurance";
import { termLifeInsuranceItems } from "@/data/faqs/term-life-insurance";
const LifeInsurance = () => {
  const [sticky, setSticky] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.asPath]);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: "1343px" }],
  };

  return (
    <>
      {/* <img src="/images/lifeinsurance.png" alt='lifeinsurance' className='w-full' /> */}

      <div
        className=" relative top-[-165px] "
        style={{
          background: `url(${"/images/sub/life.jpeg"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="py-52 pb-40 bg-[#45A1D3CC]">
          <div className=" max-w-7xl m-auto flex flex-col gap-5 xl:px-0 px-10">
            <Slider {...settings}>
              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="text-[48px] text-white text-center font-bold drop-shadow-lg">
                  Term Life Insurance
                </h1>

                <h3 className="lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto">
                  Term insurance is a type of life insurance that provides
                  financial protection to the policyholder for a predetermined
                  duration. If the insured person passes away within the
                  policy's timeframe, the company disburses a death benefit to
                  the designated beneficiary.
                </h3>
              </div>

              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="text-[48px] text-white text-center font-bold drop-shadow-lg">
                  Universal Life Insurance
                </h1>

                <h3 className="lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto">
                  Universal life insurance is a variant of permanent life
                  insurance that provides policyholders with premium payment
                  flexibility, a cash savings element, and a death benefit.
                  Within universal life insurance, individuals have the option
                  to borrow from or withdraw funds from the accumulating savings
                  portion, which grows without taxation throughout their
                  lifetime.
                </h3>
              </div>

              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="text-[48px] text-white text-center font-bold drop-shadow-lg">
                  Whole Life Insurance
                </h1>

                <h3 className="lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto">
                  Universal life insurance is a variant of permanent life
                  insurance that provides policyholders with premium payment
                  flexibility, a cash savings element, and a death benefit.
                  Within universal life insurance, individuals have the option
                  to borrow from or withdraw funds from the accumulating savings
                  portion, which grows without taxation throughout their
                  lifetime.
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="relative top-[-145px]">
        <CoverageDetail />
      </div>
      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold">Life Insurance</h1>

          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="border border-black py-1.5">
                        Term Insurance
                      </th>
                      <th className="border border-black py-1.5">
                        Whole Life Insurance
                      </th>
                      <th className="border border-black py-1.5">
                        Universal Life Insurance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lifeInsuranceTableData.map((item, i) => (
                      <tr key={i} className="">
                        <th className="text-start border border-black py-1.5 px-4">
                          {item.title}
                        </th>
                        <td className="text-center border border-black py-1.5">
                          {item.term}
                        </td>
                        <td className="text-center border border-black py-1.5">
                          {item.life}
                        </td>
                        <td className="text-center border border-black py-1.5">
                          {item.uni}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-10">
          <h2 className="font-bold">Points to Remember</h2>
          <ul className=" ml-6">
            <li>
              <h2 className="font-bold">Term</h2>
              <ul className="list-disc ml-10">
                <li>
                  Term life insurance provides temporary coverage to financially
                  protect the insured person or their dependents in case of
                  unforeseen events.
                </li>
                <li>
                  Renewing or converting an existing term life insurance policy
                  can be costly, especially if the insured individual has
                  developed health issues during the coverage period.
                </li>
                <li>
                  Opting to reapply for life insurance instead of renewing an
                  existing policy can lead to potential cost savings.
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-bold">Life</h2>
              <ul className="list-disc ml-10">
                <li>
                  Permanent life insurance provides coverage for your entire
                  lifetime and ensures a guaranteed death benefit upon your
                  passing.
                </li>
                <li>
                  These policies also include a savings element that grows in
                  cash value as the policy matures.
                </li>
                <li>
                  These policies also include a savings element that grows in
                  cash value as the policy matures.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="p-5 relative top-[-90px]"
        id="life-insurance"
        style={{ background: "#45A1D3" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
          Life Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={lifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
      <div
        className="p-5 relative top-[-90px]"
        id="life-insurance"
        style={{ background: "#45A1D3" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
          Term Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={termLifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
      {/* <div
        className='p-5 relative top-[-90px]'
        id='life-insurance'
        style={{ background: '#45A1D3' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Term Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={termLifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div> */}
    </>
  );
};

export default LifeInsurance;
