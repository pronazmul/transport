import { ContactForm } from "@/components/ContactForm";
import { tfsaInsuranceItems, tfsaTableData } from "@/data/faqs/tfsa";
import { Collapse } from "antd";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import Link from "next/link";
const TFSA = () => {
  return (
    <div className="relative">
      <HeroSection
        heading={"Tax-Free Saving Account (TFSA)"}
        img={"/images/image6.png"}
        para={`A Tax-Free Savings Account (TFSA) is a registered savings account
            with tax advantages that allow you to earn money without incurring
            taxes. Imagine a TFSA as a container where you can hold eligible
            investments, potentially generating tax-free interest, capital
            gains, and dividends.`}
        color={"#9AB88CCC"}
      />

      <div className="flex flex-col space-y-2 absolute top-[248px] right-[78px]">
        <h2 className="text-white font-bold">Looking for RRSP? </h2>
        <Link className="text-white underline" href={"/investments/rrsp"}>
          Go to RRSP
        </Link>
      </div>

      <div className="relative top-[-165px]">
        <ContactForm />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold text-lg">TFSA Insurance</h1>
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
              {tfsaTableData.map((item, i) => (
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
            After 20 years of contributing $6,000 every 4 years to the TFSA with
            a 5% annual compounded rate of return, the estimated future value of
            the TFSA is approximately $154,939.47. This amount can be withdrawn
            tax-free and used for various financial goals. Please note that this
            is a simplified illustration, and actual returns may vary.
          </p>
          <b />
          <p>
            The available TFSA contribution room may vary depending on
            individual circumstances and changes in government regulations. To
            get your specific TFSA contribution room, it's advisable to consult
            your financial institution or check your CRA My Account online.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-lg">Points to Remember</h2>
          <ul className="list-disc ml-6">
            <li className="text-md">
              <b className="underline">Enhanced Flexibility:</b> A TFSA serves as a versatile savings
              solution, accommodating a diverse range of both short-term and
              long-term financial goals. This flexibility empowers you to
              achieve your savings targets, while also enabling you to access
              your funds whenever the need arises.
            </li>
            <li className="text-md">
              <b className="underline">Tax-Free Growth:</b> Investment income generated within your TFSA
              remains exempt from taxation. The permissible array of qualified
              investments includes cash, stocks, guaranteed investment
              certificates, and mutual funds. As your investment returns
              potential increases, your savings have the potential to experience
              accelerated growth, all while remaining tax-free.
            </li>
            <li className="text-md">
             <b className="underline"> Retirement Planning:</b> A TFSA can be an excellent complement to your
              personal RRSP, offering supplementary tax-advantaged savings when
              RRSP contribution room is exhausted or when you surpass the age of
              71 and are no longer eligible to maintain an RRSP. By contributing
              to a TFSA, any income generated within the account remains
              tax-free, even upon withdrawal.
            </li>
            <li className="text-md">
              <b className="underline">Withdrawal Flexibility:</b> Withdrawals from a TFSA do not incur
              taxation. This characteristic makes the TFSA an invaluable tool
              for accumulating funds for significant expenditures. When you're
              prepared to utilize your savings, you can retrieve them sans the
              burden of taxation, thereby providing you with greater financial
              resources to allocate toward your priorities.
            </li>
          </ul>
        </div>
      </div>
      <div
        id="tfsa"
        className="p-4"
        style={{ minHeight: "100vh", background: "#9AB88CCC" }}
      >
        <h1 className="text-white font-bold text-2xl">TFSA Insurance FAQs</h1>
        <Collapse
          ghost
          items={tfsaInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </div>
  );
};

export default TFSA;
