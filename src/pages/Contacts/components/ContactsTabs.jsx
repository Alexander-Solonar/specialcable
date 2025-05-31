import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { contactsPageTabs } from 'data/contactsPageTabs';
import { contactsPageContent } from 'data/contactsPageContent';
import Container from 'components/common/Container';

const ContactsTabs = ({ setLocation }) => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(1);

  const handleContactSelect = id => {
    setSelectedId(id);
    setLocation(contactsPageContent.find(el => el.id === id));
  };

  return (
    <Container>
      <ul className="flex justify-center gap-4 pb-12 pt-10 text-center text-sm font-bold tracking-widest ml:justify-start">
        {contactsPageTabs.map(({ id, label }) => (
          <li key={id} className="w-full max-w-44 text-center">
            <button
              onClick={() => handleContactSelect(id)}
              className={`h-8 w-full uppercase ${selectedId === id ? 'bg-vivid-orange text-white' : ''}`}
            >
              {t(label)}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ContactsTabs;
