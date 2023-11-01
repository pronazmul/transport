import { ContactForm } from '@/components/ContactForm'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { autoInsuranceItems } from '@/data/faqs/auto-insurance'
import { Collapse } from 'antd'

const AutoInsurance = () => {
  return (
    <>
      <HeroSection
        img='/images/sub/auto.jpeg'
        heading={'Auto Insurance'}
        para={`Vehicle insurance encompasses coverage for automobiles, trucks, motorcycles, and various other road vehicles. Its primary purpose is to offer financial security in cases of physical damage or bodily injury caused by traffic accidents, as well as liability that may arise from vehicle-related incidents.`}
        color='#103825cc'
      />
      <div className='relative top-[-165px]'>
        <ContactForm />
      </div>

      <div className='container mx-auto relative top-[-105px] flex flex-col gap-5'>
        <div className='space-y-1'>
          <h1 className='font-bold text-lg'>Auto Insurance</h1>
          <p className='text-gray-700 text-md'>
            Auto insurance in Canada provides essential coverage for drivers,
            offering protection in the event of accidents, theft, or damage to
            your vehicle. It is a legal requirement for all Canadian drivers.
            With various options available, you can tailor your auto insurance
            to your specific needs and budget. Ensure peace of mind on the road
            by getting the right coverage for your vehicle today.
          </p>
        </div>

        <div className='space-y-2'>
          <h2 className='font-bold text-lg'>Points to Remember</h2>
          <ul className='list-disc ml-6'>
            <li className='text-md'>
              <b>Mandatory Coverage:</b> Ensure you meet the mandatory auto
              insurance coverage requirements in your province or territory.
              Failing to have the required coverage can lead to legal
              consequences, including fines and penalties.
            </li>
            <li className='text-md'>
              <b> Liability Coverage:</b> Understand the importance of liability
              coverage. This coverage protects you in case you are responsible
              for injuring others or damaging their property in an accident.
              Adequate liability coverage is essential to protect your financial
              assets.
            </li>
            <li className='text-md'>
              <b>Optional Coverages:</b> Consider your individual needs and
              preferences when choosing optional coverages. While liability
              coverage is mandatory, you have the flexibility to customize your
              policy with additional coverage types like collision,
              comprehensive, and endorsements to suit your protection
              requirements and budget.
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
        className='p-5 relative top-[-60px]'
        id='life-insurance'
        style={{ background: '#103825f0' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Auto Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={autoInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  )
}

export default AutoInsurance
