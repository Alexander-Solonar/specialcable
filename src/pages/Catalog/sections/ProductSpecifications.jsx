import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ProductSpecifications = ({ termsOfUse, construction }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest ml:mb-6 ml:text-sm">
        {t('productInfoPage.termsOfUse')}
      </h2>
      <ul className="mb-4 flex list-inside list-disc flex-col gap-y-6 text-xs ml:mb-6 ml:text-base">
        {termsOfUse.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest ml:mb-6 ml:text-sm">
        {t('productInfoPage.construction')}
      </h2>
      <ul className="mb-4 flex flex-col gap-y-6 text-xs ml:mb-6 ml:text-base">
        {construction.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSpecifications;

ProductSpecifications.propTypes = {
  termsOfUse: PropTypes.arrayOf(PropTypes.string).isRequired,
  construction: PropTypes.arrayOf(PropTypes.string).isRequired,
};
