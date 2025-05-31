import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { contactsPageContent } from 'data/contactsPageContent';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';
import ContactsTabs from './components/ContactsTabs';
import ContactInfoMapSection from './sections/ContactInfoMapSection';

const ContactsPage = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState(contactsPageContent[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-auto flex-col bg-bg-aboutUs bg-contain bg-position-contacts bg-no-repeat pt-6">
      <Container>
        <SectionTitle text={t('contactsPage.title')} />
      </Container>
      <div className="pb-14 ml:pb-40 lg:pb-56">
        <Container>
          <ul className="mt-5 flex flex-col gap-y-4 font-main text-xs font-bold tracking-widest ml:text-sm">
            <li>
              <a href="tel:+380963506413">8 (096) 350 64 13</a>
            </li>
            <li>
              <a href="mailto: info@resurscable.com">info@resurscable.com</a>
            </li>
          </ul>
        </Container>

        <ContactsTabs setLocation={setLocation} />
        <ContactInfoMapSection {...location} />
      </div>
    </div>
  );
};

export default ContactsPage;
