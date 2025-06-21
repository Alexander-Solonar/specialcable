import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const CatalogCategorySection = ({ cableTitle, cableTypes }) => {
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  return (
    <li className="w-[calc(50%-1rem)] ml:w-[calc(33%-1rem)]">
      <h2 className="mb-3 text-xs font-bold uppercase tracking-widest ml:text-sm">
        {cableTitle[lng]}
      </h2>
      <ul>
        {cableTypes.en.map((engElement, index) => (
          <li key={engElement} className="text-xs sm:text-base">
            <Link
              to={engElement}
              className="border-b-[1px] border-b-transparent transition-colors duration-300 hover:border-b-midnight-blue"
            >
              {cableTypes[lng][index]}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CatalogCategorySection;

CatalogCategorySection.propTypes = {
  cableTitle: PropTypes.shape({
    en: PropTypes.string.isRequired,
    ua: PropTypes.string.isRequired,
  }),
  cableTypes: PropTypes.shape({
    en: PropTypes.arrayOf(PropTypes.string).isRequired,
    ua: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
