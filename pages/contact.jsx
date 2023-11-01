import { ContactHero } from '@/components/ContactHero/ContactHero';
import { ContactPageForm } from '@/components/ContactPageForm/ContactPageForm';
import Iframe from 'react-iframe';


const Contact = () => {
  return (
    <div className=''>
      <ContactHero />
      <ContactPageForm />
      <div style={{ width: '100%', height: '400px' }}>
        <Iframe
          url={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBIos0h5UF7tML1RDRpldLZO16GGSfpy4k&q=925+Lawson+Road+%2340,+London,+ON+N6G+4X3`}
          width='100%'
          height='100%'
          frameBorder='0'
          style={{ border: '0' }}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Contact;
