export const rrspInsuranceItems = [
  {
    key: "1",
    label: (
      <span className="font-semibold text-lg">
        1. What is Registered Retirement Savings Plan?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p>
          A Registered Retirement Savings Plan (RRSP) is a government-registered
          savings arrangement in Canada designed for retirement savings
          purposes.
        </p>
        <p>
          By contributing funds to an RRSP, you benefit from its
          "tax-advantaged" nature, which implies that the funds you put in are
          not subject to taxation in the year of contribution. Subsequently, any
          investment income derived from investments held within the RRSP can
          grow without being taxed, as long as the funds remain within the RRSP
          until withdrawal.
        </p>
        <p>
          Contributions made to an RRSP are eligible for tax deduction, allowing
          you to deduct these amounts from your tax return for the current year.
          This deduction has the potential to decrease your overall tax burden,
          providing potential tax savings.
        </p>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <span className="font-semibold text-lg">
        2. How do Registered Retirement Savings Plans (RRSPs) operate?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p>
          Within an RRSP, a broad spectrum of investments can be held,
          contingent on the specific plan type. This includes assets such as
          stocks, bonds, guaranteed investment certificates (GICs), and mutual
          funds. The investment income that accumulates from these holdings
          enjoys tax-deferred status within the RRSP until the point of
          withdrawal.
        </p>
        <p>
          The amount you can contribute each year is determined by a maximum
          limit called your RRSP contribution or deduction limit. For the year
          2023, your RRSP contribution limit is either 18% of your earned income
          from 2022 or $30,780, whichever figure is lower. This value is then
          adjusted by considering any previously unused contribution room and
          subtracting pension adjustments.
        </p>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <span className="font-semibold text-lg">
        3. When can I begin making contributions to an RRSP?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p>
          There isn't a specific minimum age requirement for opening an RRSP.
        </p>
        <p>
          Nevertheless, certain financial institutions might stipulate that
          customers should have reached the age of majority. You have the option
          to establish and contribute to an RRSP until the end of the year you
          turn 71, provided you are a Canadian resident, possess earned income,
          and file a tax return. For more insights into making contributions to
          an RRSP, refer to our comprehensive guide on RRSP Contribution Rules.
        </p>
        <a
          target="_blank"
          href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html"
        >
          [Link: RRSP Contribution Rules]
        </a>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <span className="font-semibold text-lg">
        4. What age is optimal for initiating an RRSP?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p>
          The ideal age can differ based on individual circumstances. Generally,
          though, the sooner, the better! Commencing your investment journey for
          retirement at an early stage can potentially grant you the advantages
          of tax-deferred compound interest, contingent on the type of
          investment you hold.
        </p>
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <span className="font-semibold text-lg">
        5. What advantages come with investing in an RRSP?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <ul className="list-disc">
          <li>
            <span className="text-md font-bold underline">
              Deferred Taxation on Savings:
            </span>
            &nbsp; Investment income accrued within the plan remains
            tax-deferred as long as it remains within your RRSP.
          </li>

          <li>
            <span className="text-md font-bold underline">Tax Deductions:</span>
            &nbsp; Contributions made to your RRSP are eligible for tax
            deductions, potentially leading to a reduction in your overall
            income tax liability.
          </li>

          <li>
            <span className="text-md font-bold underline">
              Maximizing Deductions:
            </span>
            &nbsp; The option to carry forward unused RRSP contribution room
            from years with lower income allows you to apply it in future years
            when your income might be higher. This strategy can result in tax
            savings, particularly when you find yourself in a higher tax
            bracket.
          </li>

          <li>
            <span className="text-md font-bold underline">
              Income Splitting:
            </span>
            &nbsp; If your earnings exceed those of your spouse or common-law
            partner, contributing to a spousal RRSP can aid in lowering your
            collective tax burden.
          </li>
          <li>
            <span className="text-md font-bold underline">
              Supporting Home Purchase or Education Costs:
            </span>
            &nbsp; Utilizing the Home Buyers' Plan or Lifelong Learning Plan
            (LLP), you can withdraw funds from your RRSP for your first home or
            education expenses without immediate taxation.
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "6",
    label: (
      <span className="font-semibold text-lg">
        6. When am I allowed to retrieve my funds?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p>
          You have the flexibility to initiate a withdrawal from your RRSP at
          any time, provided your funds are not held within a locked-in plan.
          However, it's important to note that withdrawals typically count as
          part of your income and are subject to taxation in the year of
          withdrawal.
        </p>
        <p>
          Ordinarily, a portion of the withdrawn amount is withheld and
          forwarded to the government as an advance payment of the income tax
          due for that year.
        </p>
        <p>
          Depending on your taxable income for the withdrawal year, it might be
          advantageous to delay withdrawals until a year with a lower taxable
          income.
        </p>
        <p>
          Furthermore, unlike withdrawals from a tax-free savings account
          (TFSA), funds taken out from an RRSP are not reinstated to your
          contribution room during the year following the withdrawal.
        </p>
      </div>
    ),
  },
];


export const rrpsTableData = [
  {year: 1, annual: '7,200', total_contribution: '7,200', future_value: '7,560.00'},
  {year: 4, annual: '7,200', total_contribution: '28,800', future_value: '31,656.45'},
  {year: 8, annual: '7,200', total_contribution: '57,600', future_value: '65,378.19'},
  {year: 12, annual: '7,200', total_contribution: '86,400', future_value: '100,982.12'},
  {year: 16, annual: '7,200', total_contribution: '115,200', future_value: '139,206.65'},
  {year: 20, annual: '7,200', total_contribution: '144,000', future_value: '180,823.09'},
  {year: 24, annual: '7,200', total_contribution: '172,800', future_value: '226,591.45'},
  {year: 28, annual: '7,200', total_contribution: '201,600', future_value: '276,266.25'},
  {year: 30, annual: '7,200', total_contribution: '216,000', future_value: '300,249.74'},




]




