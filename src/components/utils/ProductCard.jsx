import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageSm, imageMl, imageXl, title }) => {
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  return (
    <li className="relative flex w-[152px] flex-col ml:w-[160px] lg:w-[280px]">
      <Link
        to="#"
        className="inline-block shadow-custom transition-transform duration-300 hover:scale-105"
        aria-label={title}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={imageSm} />
          <source media="(max-width: 1199px)" srcSet={imageMl} />
          <img
            className="h-[184px] w-full ml:h-[231px] lg:h-[400px]"
            src={imageXl}
            alt="cable"
            loading="lazy"
          />
        </picture>
      </Link>
      <p className="pointer-events-none mt-3 text-[10px] font-bold uppercase leading-[1.3] tracking-[0.20em] ml:text-xs lg:absolute lg:bottom-8 lg:left-5 lg:right-8 lg:h-16 lg:text-sm">
        {title[lng]}
      </p>
    </li>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  imageSm: PropTypes.string.isRequired,
  imageMl: PropTypes.string.isRequired,
  imageXl: PropTypes.string.isRequired,
  title: PropTypes.shape({
    ua: PropTypes.string.isRequired,
    en: PropTypes.string.isRequired,
  }).isRequired,
};
