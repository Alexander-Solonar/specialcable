import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { contactsPageContent } from 'data/contactsPageContent';
import Container from 'components/common/Container';
import BackgroundWrapper from 'components/utils/BackgroundWrapper';
import SectionTitle from 'components/common/SectionTitle';
import ContactsNav from 'components/sections/contacts-section/ContactsNav';

const ContactsPage = () => {
  const { t } = useTranslation();
  const [contact, setCertificate] = useState(contactsPageContent[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-auto flex-col">
      <Container>
        <BackgroundWrapper addStyle="bg-bg-aboutUs bg-contain bg-position-contacts">
          <SectionTitle text="Контакти" />
          <div className="pb-14 ml:pb-44 lg:pb-64">
            <ul className="mt-5 flex flex-col gap-y-4 font-main text-xs font-bold tracking-widest ml:text-sm">
              <li>
                <a href="tel:+380963506413">8 (096) 350 64 13</a>
              </li>
              <li>
                <a href="mailto: info@resurscable.com">info@resurscable.com</a>
              </li>
            </ul>

            <ContactsNav setCertificate={setCertificate} />

            <div className="flex flex-col items-center gap-4 ml:flex-row ml:items-start ml:justify-between">
              <p className="text-sm font-bold uppercase tracking-widest ml:mt-6 ml:max-w-80">
                {t(contact.address)}
              </p>

              <div className="aspect-[4/3] w-full sm:max-w-[580px]">
                <iframe
                  className="h-full w-full"
                  title={`map ${t(contact.address)}`}
                  src={t(contact.mapSrc)}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </BackgroundWrapper>
      </Container>
    </div>
  );
};

export default ContactsPage;
