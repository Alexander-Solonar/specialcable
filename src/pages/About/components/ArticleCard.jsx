import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const ArticleCard = ({ id, title, imgPreviewXl, isShowAllArticles }) => {
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
    <li className="group relative flex max-w-[280px] flex-col shadow-custom">
      <Link
        to={`article/${id}`}
        state={{
          from: location,
          scrollPosition: scrollPositionRef,
          isShowAllArticles,
        }}
        className="relative flex flex-col bg-gray transition duration-300 group-hover:brightness-75"
        aria-label={title[lng]}
      >
        <img src={imgPreviewXl} alt="cable" loading="lazy" />
      </Link>
      <p className="pointer-events-none p-3 text-[10px] font-bold uppercase leading-[1.3] tracking-[0.20em] ml:text-xs lg:absolute lg:bottom-1 lg:text-sm lg:text-white">
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
  isShowAllArticles: PropTypes.bool.isRequired,
};
