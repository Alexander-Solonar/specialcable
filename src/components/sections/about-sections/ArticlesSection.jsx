import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionTitle from '../../common/SectionTitle';
import ArticleList from '../../utils/ArticleList';
import image from '../../../assets/images/imageFull-xl.webp';
import Container from '../../common/Container';

const ArticlesSection = () => {
  const location = useLocation();
  const [showAllArticles, setShowAllArticles] = useState(location.state?.showAllArticles ?? false);

  const toggleArticles = () => {
    setShowAllArticles(!showAllArticles);
  };

  return (
    <section className="w-full pb-10 ml:pb-16 lg:pb-24">
      <Container>
        <div className="flex w-full flex-wrap-reverse justify-center gap-10 pb-8 ml:flex-nowrap ml:justify-between">
          <div className="flex flex-col items-start gap-y-4 sm:gap-y-8">
            <SectionTitle text="статьи" />
            <h2 className="text-xs font-bold uppercase tracking-wider sm:text-sm">
              Основные виды медного кабеля и Их применение
            </h2>
            <p className="max-w-[580px] indent-7 text-sm ml:text-base">
              Связавшись с электромонтажом на своем собственном участке или в собственной квартире,
              можно очень скоро заметить, что кабели и провода, используемые в монтаже –
              преимущественно медные, реже алюминиевые. используемые в монтаже – преимущественно
              медные, реже алюминиевые.
            </p>
            <Link
              to="/article"
              className="bg-vivid-orange px-5 py-2 text-xs uppercase tracking-widest text-white transition duration-300 hover:brightness-90 sm:text-sm"
            >
              читать статью
            </Link>
          </div>
          <div className="hidden sm:flex sm:flex-col">
            <img src={image} alt="cable" />
          </div>
        </div>

        <ArticleList showAllArticles={showAllArticles} />
        <div className="flex justify-center lg:justify-start">
          <button
            className="bg-vivid-orange px-5 py-1 text-xs uppercase tracking-widest text-white transition duration-300 hover:brightness-90 sm:text-sm"
            onClick={toggleArticles}
          >
            {showAllArticles ? 'Скрыть' : 'Посмотреть все статьи'}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ArticlesSection;
