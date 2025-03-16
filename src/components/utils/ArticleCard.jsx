import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const ArticleCard = ({ id, title, imgPreviewSm, imgPreviewMl, imgPreviewXl, showAllArticles }) => {
  const scrollPositionRef = useRef(0);
  const { i18n } = useTranslation();
  const location = useLocation();
  const lng = i18n.resolvedLanguage;
  const saveScroll = location?.state?.scroll?.current || 0;

  const handleScroll = () => {
    scrollPositionRef.current = window.scrollY;
  };

  useEffect(() => {
    window.scrollTo(0, saveScroll);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [saveScroll]);

  return (
    <li className="relative flex flex-col">
      <Link
        to={`article/${id}`}
        state={{ from: location, scrollPosition: scrollPositionRef, showAllArticles }}
        className="relative flex w-[152px] flex-col border border-transparent transition duration-300 hover:border-vivid-orange hover:brightness-90 ml:w-[160px] lg:w-[280px]"
        aria-label={title[lng]}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={imgPreviewSm} />
          <source media="(max-width: 1199px)" srcSet={imgPreviewMl} />
          <img
            className="h-[184px] w-full ml:h-[231px] lg:h-[400px]"
            src={imgPreviewXl}
            alt="cable"
            loading="lazy"
          />
        </picture>
      </Link>
      <p className="pointer-events-none mt-3 w-[150px] text-[10px] font-bold uppercase leading-[1.3] tracking-[0.20em] ml:w-[160px] ml:text-xs lg:absolute lg:bottom-1 lg:left-5 lg:right-8 lg:h-16 lg:w-[280px] lg:text-sm lg:text-white">
        {title[lng]}
      </p>
    </li>
  );
};

export default ArticleCard;

ArticleCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.shape({
    en: PropTypes.string.isRequired,
    ua: PropTypes.string.isRequired,
  }).isRequired,
  imgPreviewSm: PropTypes.string.isRequired,
  imgPreviewMl: PropTypes.string.isRequired,
  imgPreviewXl: PropTypes.string.isRequired,
  showAllArticles: PropTypes.bool.isRequired,
};
