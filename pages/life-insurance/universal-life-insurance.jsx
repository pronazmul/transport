import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const UniversalLifeInsurance = () => {
  return (
    <>
      <HeroSection
        heading={'Universal Life Insurance'}
        para={`Universal life insurance is a variant of permanent life insurance
            that provides policyholders with premium payment flexibility, a cash
            savings element, and a death benefit. Within universal life
            insurance, individuals have the option to borrow from or withdraw
            funds from the accumulating savings portion, which grows without
            taxation throughout their lifetime.`}
        img={'/images/new/universal-life-insurance.jpg'}
        color={'#9AB88CCC'}
        position='top'
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default UniversalLifeInsurance;
