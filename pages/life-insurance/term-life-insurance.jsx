import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const LifeInsurance = () => {
  return (
    <>
      <HeroSection
        img='/images/new/term-life-insurance.jpeg'
        heading={'Term Life Insurance'}
        para={`Term insurance is a type of life insurance that provides financial
            protection to the policyholder for a predetermined duration. If the
            insured person passes away within the policy's timeframe, the
            company disburses a death benefit to the designated beneficiary.`}
        color='#45A1D3CC'
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>

      <div className='container mx-auto relative top-[-105px] flex flex-col gap-5'>
        <div className='space-y-1'>
          <h1 className='font-bold'>
            What advantages does term life insurance offer? Is opting for term
            life insurance a wise choice?
          </h1>
          <p className='text-sm text-gray-700'>
            Term life insurance boasts numerous advantages compared to other
            life insurance variants like permanent life insurance or whole life
            insurance. As a result, it presents a valuable option for the
            majority of Canadians.
          </p>
          <p className='text-sm text-gray-700'>
            Simplicity stands out as a key benefit of selecting a term policy,
            as the process merely involves choosing the insurance company,
            determining the term's length, and setting the coverage amount. Once
            you fulfill your premium payments punctually and completely, you
            remain covered throughout the designated term.
          </p>
          <p className='text-sm text-gray-700'>
            Affordability is another prominent feature, as the term is confined
            to a fixed timeframe. Your life insurance provider calculates the
            precise premium based on factors such as your age, occupation, and
            overall health.
          </p>
          <p className='text-sm text-gray-700'>
            Furthermore, flexibility is a significant advantage. The capacity to
            stipulate both the term and coverage amount enables you to tailor
            this life insurance to fulfill specific financial requirements in
            the event of your demise.
          </p>
        </div>

        <div className='space-y-1'>
          <h1 className='font-bold'>Advantages of Term Life Insurance</h1>
          <p className='text-sm text-gray-700'>
            Simplicity - Exceptionally straightforward to comprehend - Death
            benefits remain consistent throughout the 'Term' provided premiums
            are paid.
          </p>
          <p className='text-sm text-gray-700'>
            Affordability - Inexpensive due to its coverage of a concise,
            predetermined duration without an investment element.
          </p>
          <p className='text-sm text-gray-700'>
            Targeted - Applicable for addressing distinct temporary necessities
            like mortgage, children's education, and dependent support.
          </p>
          <p className='text-sm text-gray-700'>
            Flexibility - Can be extended for an extended term or transformed
            into permanent coverage.
          </p>
        </div>
      </div>
    </>
  );
};

export default LifeInsurance;
