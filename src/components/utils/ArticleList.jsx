import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import ArticleCard from './ArticleCard';

const ArticleList = ({ showAllArticles }) => {
  const { articleList } = useContext(Context);
  const scrollPositionRef = useRef(0);
  const location = useLocation();

  const saveScroll = location?.state?.scroll?.current || 0;

  const articlesToShow = showAllArticles ? articleList : articleList.slice(0, 4);

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
    <ul className="mx-auto mb-12 mt-12 grid w-fit grid-cols-2 justify-items-center gap-5 sm:mt-10 ml:grid-cols-4">
      {articlesToShow.map(articleItem => (
        <ArticleCard key={articleItem.id} {...articleItem} showAllArticles={showAllArticles} />
      ))}
    </ul>
  );
};

export default ArticleList;

ArticleList.propTypes = {
  showAllArticles: PropTypes.bool.isRequired,
};
