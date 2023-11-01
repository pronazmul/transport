import { ContactForm } from '@/components/ContactForm';
import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const PrivacyPolicy = () => {
  return (
    <>
      <HeroSection
        heading={'Privacy Policy'}
        img='/images/privacy.jpeg '
        color='#b00f17cc'
        position='10% 30%'
      />

      <div className='relative top-[-123px] container mx-auto flex flex-col gap-6'>
        <p className='text-gray-700'>
          All content on this website is protected by copyright and intellectual
          property laws and is the property of InsuranceBuzz. While you are
          welcome to view materials found on www.InsuranceBuzz.ca , you are not
          permitted to download or distribute information from this site without
          prior consent from InsuranceBuzz, granted through the Chief Officer,
          Corporate Services.
        </p>

        <p className='text-gray-700'>
          Visitors to this website who use the information provided do so at
          their own discretion and risk.{' '}
          <strong className='font-extrabold'>InsuranceBuzz</strong> cannot be
          held responsible for the content or reliability of any other websites
          linked from our site, and the presence of such links does not
          necessarily imply endorsement of the views expressed therein. The use
          of our website for any unlawful, illegal, fraudulent, or harmful
          purpose or activity is strictly prohibited.
        </p>

        <p className='text-gray-700'>
          Although we have taken great care to ensure the accuracy and
          completeness of the electronic documents and resources available on
          this website, InsuranceBuzz makes no warranties, whether expressed or
          implied, regarding errors or omissions, and accepts no legal liability
          or responsibility for any loss or damage resulting from the use of the
          information provided.
        </p>

        <div className='flex flex-col gap-1'>
          <h1 className='font-bold'>Advisor/Company Name:</h1>
          <p className='text-sm text-gray-700'>Advisor@InsuranceBuzz.ca</p>
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='font-bold'>Address & Contact Details:</h1>
          <p className='text-sm text-gray-700'>InsuranceBuzz</p>
          <p className='text-sm'>925 Lawson Road #40, London, ON N6G 4X3</p>
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='font-bold underline'>Communication Disclaimer:</h1>
          <p className='text-gray-700'>
            All forms of communication in the form of emails, facsimiles, or
            voicemails originating from an employee or any automated system of
            InsuranceBuzz are intended solely for the use of the individual or
            entity to which they are addressed. Such communications may contain
            information that is privileged, proprietary, confidential, and
            exempt from disclosure. If you are not the intended recipient,
            please be aware that any dissemination, distribution, or copying of
            this communication is strictly prohibited. If you have received any
            communication in error, kindly notify the sender and promptly delete
            the communication.
          </p>
          <p className='text-gray-700'>
            All forms of communication in the form of emails, facsimiles, or
            voicemails originating from an employee or any automated system of
            InsuranceBuzz are intended solely for the use of the individual or
            entity to which they are addressed. Such communications may contain
            information that is privileged, proprietary, confidential, and
            exempt from disclosure. If you are not the intended recipient,
            please be aware that any dissemination, distribution, or copying of
            this communication is strictly prohibited. If you have received any
            communication in error, kindly notify the sender and promptly delete
            the communication.
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='font-bold underline'>Privacy Statement:</h1>

          <div>
            <h2 className='font-bold'>Protecting Your Privacy</h2>
            <p className='text-gray-700'>
              InsuranceBuzz places a high priority on safeguarding your privacy.
              We are committed to protecting the personal information of
              consumers. Our Privacy Policy outlines our practices for
              collecting, using, disclosing, and storing personal information.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
              <h2 className='font-bold'>The Personal Information We Collect</h2>
              <p className='text-gray-700'>
                We collect only the information necessary for providing and
                servicing financial and insurance products. Personal information
                refers to details about an "identifiable individual" and may
                encompass:
              </p>
            </div>

            <ul className='list-disc text-gray-700 ml-6'>
              <li>Credit information</li>
              <li>Lifestyle details</li>
              <li>Marital status</li>
              <li>Date of birth</li>
              <li>Citizenship status</li>
              <li>Occupation</li>
              <li>Health data</li>
              <li>Net worth</li>
              <li>Gender</li>
              <li>Social insurance number</li>
              <li>Income</li>
              <li>Name, home address, and phone number</li>
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
              <h2 className='font-bold'>
                Your Consent to Collection, Use, and Disclosure
              </h2>
              <p className='text-gray-700'>
                We obtain your consent before collecting, using, or disclosing
                personal information, unless required by law. Consent may be
                oral or written, either express (e.g., providing personal
                information on an application form) or implied (e.g., not
                withdrawing consent when given the opportunity to do so). Your
                authorized representative can provide consent on your behalf.
                You have the right to withdraw your consent to the collection,
                use, and disclosure of your personal information, subject to
                legal and contractual restrictions and reasonable notice.
              </p>
            </div>

            <div>
              <h2 className='font-bold'>
                Your Right to Access Your Personal Information
              </h2>
              <p className='text-gray-700'>
                You have the right to inquire if we possess any personal
                information about you, as well as how we use it. In certain
                circumstances, we may be unable to provide access to all your
                personal information, such as if it contains information about a
                third party or confidential commercial details. You may request
                corrections to any inaccurate or incomplete information we hold
                about you.
              </p>
            </div>

            <div>
              <h2 className='font-bold'>
                Duration of Personal Information Retention
              </h2>
              <p className='text-gray-700'>
                We retain personal information only for as long as necessary or
                as required by law. The duration depends on the product or
                service we provide and the nature of the information.
              </p>
            </div>

            <div>
              <h2 className='font-bold'>Why We Collect Information</h2>
              <p className='text-gray-700'>We use personal information to:</p>
            </div>

            <ul className='list-disc text-gray-700 ml-6'>
              <li>Confirm your identity.</li>
              <li>
                Administer and service the products and services you request.
              </li>
              <li>
                Administer and service the insurance and/or financial products
                we offer.
              </li>
              <li>
                Comply with regulatory and contractual requirements related to
                the services and products provided to you.
              </li>
            </ul>

            <div className='flex gap-2 flex-col'>
              <h2 className='font-bold'>
                Opting Out of Receiving Product Information
              </h2>
              <p className='text-gray-700'>
                If you do not wish for your personal information to be used for
                marketing or promotional purposes, you can:
              </p>
              <p className='text-gray-700'>
                Follow available procedures at the point of collection to "opt
                out" of the collection, use, or disclosure of your personal
                information for those purposes.
              </p>
              <p className='text-gray-700'>
                Inform your advisor if "opt-out" options are not available,
                expressing your desire to opt out.
              </p>
              <p className='text-gray-700'>Contact Us</p>
              <p className='text-gray-700'>
                For requests regarding access to, updates or corrections of your
                personal information, or for privacy-related questions,
                complaints, or comments, please contact InsuranceBuzz at:
              </p>

              <p className='text-gray-700'>
                <span className='text-blue-500 underline'>
                  advisor@insurancebuzz.ca{' '}
                </span>
                or
              </p>
              <p className='text-gray-700'>
                InsuranceBuzz 925 Lawson Road #40, London, ON N6G 4X3
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='font-bold underline'>Privacy Statement:</h1>
          <p className='text-gray-700'>
            InsuranceBuzz reserves the right to review and amend this Privacy
            Policy without prior notice. It is advisable to periodically review
            this policy to stay informed about our current information
            management practices. Continuing to provide personal information
            after changes to our Privacy Policy indicates your acceptance of
            those changes.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
