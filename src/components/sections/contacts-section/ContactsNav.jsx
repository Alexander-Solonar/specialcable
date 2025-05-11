import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { contactsPageNavButtons } from 'data/contactsPageNavButtons';
import { contactsPageContent } from 'data/contactsPageContent';

const ContactsNav = ({ setCertificate }) => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(1);

  const handleContactSelect = id => {
    setSelectedId(id);
    setCertificate(contactsPageContent.find(el => el.id === id));
  };

  return (
    <ul className="flex justify-center gap-4 pb-12 pt-10 text-center text-sm font-bold tracking-widest ml:justify-start">
      {contactsPageNavButtons.map(({ id, label }) => (
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
  );
};

export default ContactsNav;
