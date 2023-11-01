export const lifeInsuranceItems = [
  {
    key: "1",
    label: (
      <span className="text-lg font-semibold">Types of Life Insurance</span>
    ),
    children: (
      <div className="space-y-2">
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="text-md font-bold underline">Term Insurance:</span>{" "}
            It is a life insurance policy that provides coverage for a set
            period (the "term"), offering a death benefit to beneficiaries if
            the policyholder passes away during that time. It is a
            straightforward, temporary insurance option primarily focused on
            providing financial protection.
          </li>
          <li>
            <span className="text-md font-bold underline">
              Permanent Life Insurance:
            </span>{" "}
            Also referred to as whole life insurance, it provides coverage for
            the entirety of your life span. This type of insurance often
            includes an investment or cash value feature, resulting in a lump
            sum payment that is exempt from taxation.
            <p>
              As its name implies, permanent life insurance is most suitable for
              safeguarding enduring or lifelong necessities. These may encompass
              obligations like estate taxes, the care of a disabled family
              member, ensuring liquidity for closely-held enterprises, and even
              covering funeral costs.
            </p>
            <p>
              Through gradual payments into your permanent policy, its
              investment value can grow over time.
            </p>
            <p>
              You have the option to withdraw the cash value of your permanent
              insurance policy to supplement your retirement earnings or defray
              various expenses. Alternatively, you can utilize the cash value
              component as collateral for a loan. Alternatively, you can decide
              to leave the life insurance payout to your designated
              beneficiaries, as is customary with other types of life insurance.
            </p>
            <p>
              Permanent life insurance plans typically necessitate higher
              premiums due to the fact that they provide coverage throughout
              your entire lifetime.
            </p>
            <p>
              Further information regarding diverse types of permanent life
              insurance policies is available below, such as participating and
              non-participating policies, term-to-100 policies, limited-pay
              policies, and universal life insurance.
            </p>
          </li>

          <li>
            <span className="text-md font-bold underline">
              Participating Life Insurance:
            </span>{" "}
            Constitutes a variant of whole life insurance coverage that offers
            more than just the assured death benefit. This policy has the
            potential to generate dividends, which are monetary distributions
            disbursed periodically throughout the policy's duration. These
            dividends are linked to the insurance company's performance and
            profits, typically granted to the policyholder on an annual basis.
            Essentially, this arrangement enables the policyholder to partake in
            the insurance company's profitability during their lifetime.
            <p>
              These dividends are sourced from the gains yielded by the premiums
              submitted by the popcyholder to the insurance company. The
              premiums from participating policies are aggregated and invested
              by the insurer. The resulting investment proceeds are then
              employed by the insurance company to fulfill benefits and cover
              other associated costs.
            </p>
            <p>
              Therefore, the dividends are essentially derived from any surplus
              profits stemming from the investment fund associated with the
              participating policy. Importantly, it should be acknowledged that
              dividends are not guaranteed, unlike the assured death benefit.
              Their distribution can vary based on the performance of
              investments.
            </p>
          </li>

          <li>
            <span className="text-md font-bold underline">
              Non-Participating Whole Life Insurance:
            </span>{" "}
            Represents the most fundamental version of permanent insurance. It
            guarantees a tax-free death benefit and lifelong coverage, as long
            as you continue to pay the premiums. These policies feature a fixed
            premium, which remains unaffected by changes in your health once the
            coverage is in effect.
            <p>
              In addition to the guaranteed death benefit, non-participating
              policies also accrue a cash value component. This cash value can
              be utilized to support various expenses during your lifetime
              through a policy loan. The cash value essentially comprises the
              sum of money that accumulates within the policy. The cash
              surrender value, on the other hand, denotes the amount paid to a
              policyholder if they decide to terminate the policy, minus any
              applicable surrender fees. Typically, the cash value experiences
              year-over-year growth and becomes accessible after a specified
              period of the policy, such as after 10 years.
            </p>
          </li>

          <li>
            <span className="text-md font-bold underline">
              Term-to-100 Insurance:
            </span>{" "}
            Schemes encompass a variety of whole life insurance that lacks a
            cash-out feature. These policies solely provide a payout upon your
            demise, rendering them somewhat more economical. They serve as a
            connection between term and whole life insurance. Furthermore, if
            you manage to reach the age of 100, you are relieved from the
            obligation to pay premiums while still maintaining the coverage. A
            multitude of individuals opt for a term-to-100 policy to address
            funeral expenses or essentially serve as a practical form of final
            expense insurance.
          </li>
          <li>
            <span className="text-md font-bold underline">
              Limited Pay Whole Life Insurance:
            </span>{" "}
            Stands as a type of permanent coverage characterized by a distinct
            payment structure. In this scenario, the life insurance company
            designates a condensed payment period, which could span 20 or 30
            years, for instance. Upon completing premium payments within the
            specified timeframe, your life insurance policy remains assured
            without the need for further premium disbursements. It's worth
            noting that this policy generally entails elevated insurance
            expenses, given that the premiums are weighted toward the earlier
            years.
          </li>
          <li>
            <span className="text-md font-bold underline">
              Universal Life Insurance:
            </span>{" "}
            Bears resemblance to whole life insurance, albeit with an additional
            self-directed, long-term investment facet. This implies that your
            insurance provider presents opportunities for investing the cash
            value within your policy, effectively serving as a means to
            accumulate retirement savings. For those who possess investment
            acumen or prioritize estate planning, universal life insurance could
            emerge as a more enticing choice. However, it's essential to note
            that universal life insurance policies demand more active management
            than alternative life insurance selections, and their investment
            returns might not match those offered by other investment avenues.
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <span className="text-lg font-semibold">
        Term versus Whole Life Insurance
      </span>
    ),
    children: (
      <div>
        <div className="flex flex-col gap-2 mb-5">
          <span className="font-bold underline">Term Life Insurance</span>
          <p className="text-md">
            Typically, term life insurance emerges as a more budget-friendly
            option during youth when your requirements are substantial yet
            primarily temporary, such as raising children or covering mortgage
            obligations.
          </p>
          <ul className="list-disc">
            <li className="text-md">
              Provides interim coverage over a predetermined timeframe
            </li>
            <li className="text-md">
              Most appropriate for provisional necessities (like mortgages,
              children’s education, safeguarding lifestyle)
            </li>
            <li className="text-md">
              Yields a death benefit without any accumulation of cash value
            </li>
            <li className="text-md">
              Death benefit remains fixed from policy inception and remains
              unchanged
            </li>
            <li className="text-md">
              Inadmissible to procure loans or withdrawals against the policy
            </li>
            <li className="text-md">
              Benefits are exclusively received upon the policyholder’s demise
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold underline">Whole Life Insurance</span>
          <p className="text-md">
            Conversely, whole life insurance policies deliver enduring coverage,
            contingent upon consistent premium payments, and prove advantageous
            for estate planning and addressing final expenses.
          </p>
          <ul className="list-disc">
            <li className="text-md">Offers lifelong coverage assurance</li>
            <li className="text-md">
              Most suitable for perpetual necessities (comprising estate
              planning, retirement income, and final costs)
            </li>
            <li className="text-md">
              Generates a death benefit along with the potential to access a
              burgeoning cash value
            </li>
            <li className="text-md">
              Death benefit could amplify through dividends
            </li>
            <li className="text-md">
              Policy loans are attainable, and dividends might be withdrawn
            </li>
            <li className="text-md">
              Benefits can potentially be received during the policyholder's
              lifetime through dividends or loans
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <span className="text-lg font-semibold">
        What is the Cost of Life Insurance in Canada?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-md">
          To start, let's address the concept of life insurance within this
          context. The most straightforward form of coverage is term life
          insurance. This variety of life insurance policy offers protection for
          a predetermined duration or term, and the length of this term
          significantly influences the cost of basic life insurance.
        </p>

        <p className="text-md">
          The life insurance death benefit has the capacity to encompass a
          majority of your temporary life insurance necessities. This
          encompasses financial scenarios like your mortgage, any outstanding
          debts, funding your children's education, or sustaining the living
          expenses of your loved ones to maintain their current quality of life
          – even in the event of your demise.
        </p>

        <p className="text-md">
          Due to the relatively shorter term associated with term life
          insurance, insurance companies typically present more affordable
          premiums for this type of coverage.
        </p>

        <p className="text-md">
          Numerous other factors contribute to the average cost of your life
          insurance premium, and we'll delve into these details shortly.
          Nevertheless, the image below offers a general estimate of the average
          life insurance cost.
        </p>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <span className="text-lg font-semibold">
        How Can I Establish the Appropriate Amount of Life Insurance Coverage
        Required?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-md">
          The most effective approach to gauging your required insurance amount
          is by utilizing a life insurance calculator. These tools swiftly
          evaluate your individual and financial circumstances, considering your
          assets and liabilities. Subsequently, they provide insight into the
          necessary insurance coverage to address those financial obligations.
        </p>

        <p className="text-md">
          However, before you rush to search for a calculator, here's some good
          news: we offer one right here! Our life insurance needs calculator
          streamlines the process and determines your coverage needs within
          minutes. We concentrate on essential aspects of your financial
          situation to ensure simplicity and accuracy.
        </p>
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <span className="text-lg font-semibold">
        What Amount of Life Insurance Is Necessary to Settle Your Debts?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-md">
          Are you in debt to anyone? We're not referring to the small dinner
          bill from last week but rather substantial debts – credit card
          balances, auto loans, your mortgage, and the like. In the unfortunate
          event of your unexpected demise, the responsibility of repaying your
          outstanding debts falls upon someone else. This serves as a major
          driving force behind obtaining life insurance. The right coverage
          amount not only offers tranquility but also ensures that your spouse,
          children, or even parents wouldn't be burdened with your debts while
          coping with your passing.
        </p>

        <p className="text-md">
          For the majority of Canadians, the most significant debt source is
          typically their mortgage. However, it's not unusual to have
          outstanding balances on credit lines, credit cards, and student loans.
        </p>
        <p className="text-md">
          Tallying these liabilities can serve as a foundational step in
          determining your fundamental coverage requirements.
        </p>
      </div>
    ),
  },
  {
    key: "6",
    label: (
      <span className="text-lg font-semibold">
        What Is the Necessary Life Insurance Coverage to Support My Family's
        Living Expenses?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-md">
          The subsequent step in determining your coverage requirements involves
          posing three fundamental questions:
        </p>
        <ul className="list-disc">
          <li className="text-md">How many dependents do I have?</li>
          <li className="text-md">
            What proportion of my post-tax annual income do they rely on?
          </li>
          <li className="text-md">
            Over how many years will they depend on my financial support?
          </li>
        </ul>
        <p className="text-md">
          A dependent constitutes anyone reliant on your financial backing. If
          you serve as the primary income provider for your household and/or
          have children, dependents are already in place. There might also be
          elderly parents or family members with disabilities who rely on your
          financial assistance. Their needs should be factored in when computing
          the coverage amount, as they would be the beneficiaries of the life
          insurance payout.
        </p>
        <p className="text-md">
          After identifying those who depend on you, consider the following: how
          much will they require annually?
        </p>
        <p className="text-md">
          Does your partner earn an annual income, even if you cover the
          majority of bills and living expenses? What are your family's rent or
          mortgage payments? How about costs for food, clothing, utilities, and
          more? What annual amount is necessary for them to uphold their
          existing standard of living? Combine these expenditures to determine
          an annual total.
        </p>
      </div>
    ),
  },
  {
    key: "7",
    label: (
      <span className="text-lg font-semibold">
        Do I Need Life Insurance If I Have It Through Work?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-md">
          Numerous individuals possess life insurance through their employment
          and don't explore individual life insurance options. However, the
          reality remains that group coverage frequently falls short in meeting
          your coverage requirements during critical periods. The merits of
          group life insurance encompass its cost-effectiveness, ease of
          enrollment, and reduced underwriting demands. Nonetheless, its
          drawbacks consist of constrained coverage, absence of policy control,
          restricted portability, and tax implications. As an alternative, we
          recommend considering an individual term life insurance policy.
        </p>
      </div>
    ),
  },
  {
    key: "8",
    label: (
      <span className="text-lg font-semibold">
        What Advantages Does Group Life Insurance Offer?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-md">
          <span className="text-md font-bold underline">
            What Are the Advantages of Group Life Insurance?
          </span>
        </p>
        <p className="text-md">
          Group life insurance holds several benefits that render it an
          appealing choice for those who have access to it through their
          employment or a professional association.
        </p>
        <ul className="list-disc">
          <li>
            <span className="font-md font-bold">Affordability:</span>
            Often, an employer covers a significant portion or the entirety of
            the life insurance premium, resulting in minimal or no expenses for
            the plan member. If contributions are necessary, they typically come
            at a lower cost. This occurs because the insurance company
            calculates pricing based on the collective risk profile of the
            entire group, rather than evaluating each individual applicant.
          </li>
          <li>
            <span className="font-md font-bold"> Convenience:</span>
            Enrollment is simple and convenient, requiring only a modest amount
            of paperwork and without individual underwriting. Payments are
            usually deducted from payroll, eliminating concerns about policy
            lapses due to missed premiums.
          </li>

          <li>
            <span className="font-md font-bold">Limited Underwriting:</span>
            In most instances, individual plan members of group term life
            contracts do not undergo medical examinations. Members may be
            enrolled automatically or voluntarily within the comprehensive group
            life insurance plan. However, in specific scenarios such as seeking
            coverage beyond the group limit or rejoining the plan after initial
            refusal, eligible employees might need to undergo medical
            underwriting to demonstrate good health.
          </li>
        </ul>

        <p className="text-md">
          <span className="text-md font-bold underline">
            What Are the Drawbacks of Group Life Insurance?
          </span>
        </p>
        <ul className="list-disc">
          <li>
            <span className="font-md font-bold"> Limited Coverage:</span>
            Group life insurance benefits generally offer restricted coverage
            and may not adequately address your or your family's needs.
            Supplementary coverage beyond the basic group life insurance plan
            provided by your employer is likely necessary.
          </li>
          <li>
            <span className="font-md font-bold"> Lack of Control:</span>
            One disadvantage is the absence of control. Plan sponsors (employers
            or organizations) or even the insurance company can modify or
            terminate the plan at their discretion. Since the plan is shared
            among a group, customization to suit your unique requirements is not
            feasible. Certain medical conditions might be excluded.
          </li>

          <li>
            <span className="font-md font-bold"> Limited Portability:</span>
            Group life insurance is contingent upon an individual's association
            with the specific group. Insurance linked to one job doesn't
            guarantee the same in a new position. Should you require life
            insurance after changing careers, premiums are likely to rise as
            you're older and deemed higher risk from an underwriting
            perspective.
          </li>

          <li>
            <span className="font-md font-bold">Taxation: </span>
            Depending on your employer's structure of benefit fees, the payout
            might be subject to taxes.
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "9",
    label: (
      <span className="text-lg font-semibold">
        What Is Single Life Insurance?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-md">
          Single life insurance pertains to life insurance coverage that
          exclusively encompasses one individual. Under a single life insurance
          policy, a predetermined lump sum benefit is disbursed if the insured
          person passes away within the designated 'term' or duration of the
          policy. The nature of this insurance is independent of a person's
          marital status. In discussions concerning life insurance, the term
          usually refers to individual or single life insurance, unless
          explicitly stated otherwise.
        </p>
        <p className="text-md">
          <span className="text-md font-bold underline">
            When considering a couple's pursuit of life insurance:
          </span>
        </p>
        <p className="text-md">
          Both partners possess the option to independently apply for and secure
          their own individual single life insurance. The individual coverages
          can be tailored to align with their respective needs. This implies
          that partners can establish distinct coverage amounts, policy
          durations, and even designate individual beneficiaries for their
          respective policies if they wish. In the unfortunate event of one
          partner's demise, the beneficiary will receive the life insurance
          payout. Meanwhile, the surviving spouse's coverage will remain
          unaffected and continue to be in effect.
        </p>
      </div>
    ),
  },
  {
    key: "10",
    label: (
      <span className="text-lg font-semibold">
        What Does "Joint Life Insurance" Mean?
      </span>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-md">
          Joint life insurance pertains to a policy that offers coverage for
          multiple individuals. This type of insurance is commonly chosen by
          couples seeking shared coverage within a single policy.
        </p>
        <p className="text-md">
          This insurance concept can also apply to business scenarios. For
          instance, it involves insuring the lives of two or more partners in a
          business, enabling the payout to address potential financial
          obligations within the business in the event of a critical partner's
          demise. Despite its apparent simplicity, the functioning of joint life
          insurance varies based on the specific type of coverage selected,
          namely, Joint First-to-Die or Joint Last-to-Die.
        </p>
      </div>
    ),
  },
];

export const lifeInsuranceTableData = [
  {
    title: "Coverages",
    term: "Temporary",
    life: "Permanent",
    uni: "Permanent",
  },
  { title: "Cash Surrender value", term: "No", life: "Yes", uni: "Yes" },
  { title: "Potential Growth", term: "No", life: "Yes", uni: "Yes" },
  { title: "Investment (Self-Directed)", term: "No", life: "No", uni: "Yes" },
  { title: "Premium Guaranteed", term: "Yes", life: "Yes", uni: "No" },
  { title: "Cost", term: "Low", life: "Medium", uni: "High" },
];
