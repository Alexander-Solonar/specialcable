import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import image from '../../assets/images/image-article.jpeg';
import { Link } from 'react-router-dom';

import ProductList from '../utils/ProductList';

const data = [1, 2, 3, 4, 5, 6, 7, 8];

const ArticlesSection = () => {
  const [articles, setArticles] = useState(data.slice(0, 4));
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleArticles = () => {
    setIsExpanded(!isExpanded);
    setArticles(isExpanded ? data.slice(0, 4) : data);
  };

  return (
    <section className="w-full">
      <div className="flex w-full flex-wrap-reverse justify-center gap-10 pb-8 ml:flex-nowrap ml:justify-between">
        <div className="flex flex-col items-start gap-y-4 sm:gap-y-8">
          <SectionTitle text="статьи" />
          <h2 className="text-xs font-bold uppercase tracking-wider sm:text-sm">
            Основные виды медного кабеля и Их применение
          </h2>
          <p className="max-w-[580px] indent-7">
            Связавшись с электромонтажом на своем собственном участке или в собственной квартире,
            можно очень скоро заметить, что кабели и провода, используемые в монтаже –
            преимущественно медные, реже алюминиевые. используемые в монтаже – преимущественно
            медные, реже алюминиевые.
          </p>
          <Link
            to="/article"
            className="bg-vivid-orange px-5 py-1 text-xs uppercase tracking-widest text-white transition-opacity duration-300 hover:opacity-90 sm:text-sm"
          >
            читать статью
          </Link>
        </div>
        <div className="hidden sm:flex sm:flex-col">
          <img src={image} alt="cable" />
        </div>
      </div>

      <ProductList products={articles} />
      <button
        className="items-center bg-vivid-orange px-5 py-1 text-xs uppercase tracking-widest text-white transition-opacity duration-300 hover:opacity-90 sm:text-sm"
        onClick={toggleArticles}
      >
        {isExpanded ? 'Скрыть' : 'Показать все'}
      </button>
    </section>
  );
};

export default ArticlesSection;
