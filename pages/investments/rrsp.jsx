import { ContactForm } from "@/components/ContactForm";
import { CoverageDetail } from "@/components/CoverageDetail";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { rrpsTableData } from "@/data/faqs/rrsp";
import { rrspInsuranceItems } from "@/data/faqs/rrsp";
import { Collapse } from "antd";
import Link from "next/link";
const RRSP = () => {
  return (
    <div className="relative">
      <HeroSection
        heading={"Registered Retirement Saving Plan (RRSP)"}
        para={`  A Registered Retirement Savings Plan (RRSP) is a Canadian retirement
            savings and investment tool available to both employees and
            self-employed individuals. Contributions made to an RRSP are
            deducted from your pre-tax income and the funds grow tax-free until
            withdrawal. Upon withdrawal, the amount is subject to taxation at
            the applicable marginal rate.`}
        img={"/images/sub/RRSP.jpeg"}
        color={"#256c18CC"}
      />

      <div className="flex flex-col space-y-2 absolute top-[272px] right-[78px]">
        <h2 className="text-white font-bold">Looking for TFSA? </h2>
        <Link className="text-white underline" href={"/investments/tfsa"}>
          Go to TFSA
        </Link>
      </div>

      <div className="relative top-[-165px]">
        <ContactForm />
      </div>
      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold text-lg">RRSP Insurance</h1>
          <table className="pt-5 w-full text-center overflow-x-auto">
            <thead>
              <tr>
                <th className="border border-black py-7">Year</th>
                <th className="border border-black py-7">
                  Annual Contribution
                </th>
                <th className="border border-black py-7">
                  Total Contributions
                </th>
                <th className="border border-black py-7">
                  Estimated Future Value
                </th>
              </tr>
            </thead>
            <tbody>
              {rrpsTableData.map((item, i) => (
                <tr key={i++}>
                  <td className="border border-black py-7">Year {item.year}</td>
                  <td className="border border-black py-7">${item.annual}</td>
                  <td className="border border-black py-7">
                    ${item.total_contribution}
                  </td>
                  <td className="border border-black py-7">
                    ${item.future_value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="pt-6">
            After 30 years of contributing $7,200 every 4 years to the RRSP with
            a 5% annual compounded rate of return, the estimated future value of
            the RRSP is approximately $300,249.74. This amount can be used for
            retirement and is subject to taxation upon withdrawal. Please keep
            in mind that this is a simplified illustration, and actual returns
            may vary.
          </p>
          <p>
            <b>Disclaimer:</b> The estimated future values provided in this
            table are based on a simplified illustration with an assumed 5%
            annual compounded rate of return. Actual returns may vary due to various factors, including market fluctuations and investment choices. Consult with a financial advisor for precise calculations and investment strategies tailored to your specific situation and goals.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-lg">Points to Remember</h2>
          <ul className="list-disc ml-6">
            <li className="text-md">
              <b className="underline"> Deferred Taxation on Savings:</b>{" "}
              Investment income accrued within the plan remains tax-deferred as
              long as it remains within your RRSP.
            </li>
            <li className="text-md">
             <b className="underline"> Tax Deductions:</b> Contributions made to your RRSP are eligible for
              tax deductions, potentially leading to a reduction in your overall
              income tax liability.
            </li>
            <li className="text-md">
              <b className="underline">Maximizing Deductions:</b> The option to
              carry forward unused RRSP contribution room from years with lower
              income allows you to apply it in future years when your income
              might be higher. This strategy can result in tax savings,
              particularly when you find yourself in a higher tax bracket.
            </li>
            <li className="text-md">
              <b className="underline">Income Splitting:</b> If your earnings
              exceed those of your spouse or common-law partner, contributing to
              a spousal RRSP can aid in lowering your collective tax burden.
            </li>
            <li className="text-md">
              <b className="underline">
                Supporting Home Purchase or Education Costs:
              </b>
              Utilizing the Home Buyers' Plan or Lifelong Learning Plan (LLP),
              you can withdraw funds from your RRSP for your first home or
              education expenses without immediate taxation.
            </li>
          </ul>
          <p>
            These three points emphasize the legal obligations, the fundamental
            role of liability coverage, and the flexibility to tailor your auto
            insurance policy to your specific needs, making them crucial to
            remember when obtaining auto insurance in Canada.
          </p>
        </div>
      </div>
      <div
        id="rrsp"
        className="p-4"
        style={{ minHeight: "100vh", background: "#256c18CC" }}
      >
        <h1 className="text-white font-bold text-2xl">RRSP Insurance FAQs</h1>
        <Collapse
          ghost
          items={rrspInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </div>
  );
};

export default RRSP;
