import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context/Context';

import SpriteIcon from '../common/SpriteIcon';

const LangSwitcher = ({ className }) => {
  const { isLangOpen, setIsLangOpen } = useContext(Context);
  const { i18n } = useTranslation();
  const { language, languages } = i18n;

  const languageNames = {
    en: 'English',
    ua: 'Українська',
  };

  const switchLanguage = lang => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <div className={className}>
      <div>
        <button
          aria-haspopup="true"
          aria-expanded={isLangOpen}
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="flex items-center p-2 focus:outline-none"
        >
          <SpriteIcon icon={language} width={22} height={15} />
          <SpriteIcon icon={isLangOpen ? 'ctrl-up' : 'ctrl-down'} width={22} height={15} />
        </button>
      </div>

      {isLangOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow-lg">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => switchLanguage(lang)}
              className={`block w-full px-4 py-2 text-left text-sm ${
                language === lang && 'font-semibold'
              } hover:bg-gray`}
            >
              {`${languageNames[lang]} (${lang})`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
