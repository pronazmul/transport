import { ContactForm } from '@/components/ContactForm'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { homeInsuranceItems } from '@/data/faqs/home-insurance'
import { Collapse } from 'antd'

const HomeInsurance = () => {
  return (
    <>
      <HeroSection
        heading={'Home Insurance'}
        para={`Home insurance in Canada is a financial protection policy that homeowners purchase to safeguard their homes and personal belongings. It covers various aspects, including damage to the home's structure, loss or damage to personal property, liability protection, and coverage for additional living expenses in case the home becomes temporarily uninhabitable due to a covered event. Home insurance provides peace of mind and financial security to homeowners in the face of unexpected events, accidents, or losses.`}
        img='/images/new/home-insurance.jpg'
        color='#b00f17cc'
      />

      <div className='relative top-[-143px]'>
        <ContactForm />
      </div>

      <div className='container mx-auto relative top-[-105px] flex flex-col gap-5'>
        <div className='space-y-1'>
          <h1 className='font-bold text-lg'>Home Insurance</h1>
          <p className='text-gray-700 text-md'>
            Home insurance in Canada safeguards your most significant investment
            – your home. It provides protection against risks like fire, theft,
            natural disasters, and liability. Home insurance is a smart choice
            for homeowners, offering various coverage options to suit your
            unique requirements. Secure your home and belongings with the right
            insurance policy, ensuring your peace of mind.
          </p>
        </div>

        <div className='space-y-2'>
          <h2 className='font-bold text-lg'>Points to Remember</h2>
          <ul className='list-disc ml-6'>
            <li className='text-md'>
              <b>Coverage Adequacy:</b> Ensure that your home insurance policy
              provides adequate coverage for your property and possessions.
              Review the limits and consider factors like the replacement cost
              of your home and the value of your belongings to ensure you have
              sufficient protection in case of a loss.
            </li>
            <li className='text-md'>
              <b> Additional Coverages: </b>Understand the optional coverages
              and endorsements available with your policy. Depending on your
              circumstances, you may want to consider additional protection for
              specific risks such as flood, earthquake, or sewer backup. Assess
              your needs and add these coverages as necessary.
            </li>
            <li className='text-md'>
              <b>Documentation and Inventory:</b> Maintain a thorough inventory
              of your belongings and keep records of valuable items. This
              documentation is crucial in the event of a claim, as it helps
              ensure you receive proper compensation for lost or damaged items.
              Consider keeping a digital or physical inventory, including
              photographs and receipts.
            </li>
          </ul>
          <p>
            These three points highlight the importance of adequate coverage,
            understanding optional coverages, and maintaining proper
            documentation, which are essential aspects of securing the right
            home insurance in Canada for your specific needs.
          </p>
        </div>
      </div>

      <div
        className='p-5 relative top-[-60px]'
        id='life-insurance'
        style={{ background: '#b00f17f5' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Home Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={homeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  )
}

export default HomeInsurance
