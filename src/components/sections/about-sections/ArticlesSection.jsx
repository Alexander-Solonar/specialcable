import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localArticle } from 'data/localArticle.js';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';
import ArticleList from 'components/utils/ArticleList';

const ArticlesSection = () => {
  const location = useLocation();
  const [showAllArticles, setShowAllArticles] = useState(
    location.state?.showAllArticles ?? false
  );
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

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
              {localArticle[0].title[lng]}
            </h2>
            <p className="max-w-[580px] indent-7 text-sm ml:text-base">
              {localArticle[0].text[lng]}
            </p>
            <Link
              to="article/local"
              state={{ from: location }}
              className="bg-vivid-orange px-5 py-2 text-xs uppercase tracking-widest text-white transition duration-300 hover:brightness-90 sm:text-sm"
            >
              {t('articlesSection.btnReadArticle')}
            </Link>
          </div>
          <div className="hidden sm:flex sm:flex-col">
            <img src={localArticle[0].imgFullXl} alt="cable" />
          </div>
        </div>

        <ArticleList showAllArticles={showAllArticles} />
        <div className="flex justify-center lg:justify-start">
          <button
            className="bg-vivid-orange px-5 py-1 text-xs uppercase tracking-widest text-white transition duration-300 hover:brightness-90 sm:text-sm"
            onClick={toggleArticles}
          >
            {t(
              `articlesSection.${showAllArticles ? 'btnHide' : 'btnShowAllArticles'}`
            )}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ArticlesSection;
