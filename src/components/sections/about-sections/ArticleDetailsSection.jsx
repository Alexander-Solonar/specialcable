import React, { useContext, useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Context } from '../../../context/Context';
import { useTranslation } from 'react-i18next';
import Container from '../../common/Container';
import SpriteIcon from '../../common/SpriteIcon';

const ArticleDetailsSection = () => {
  const { articleList } = useContext(Context);
  const location = useLocation();
  const { articleId } = useParams();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const scrollPosition = useRef(location.state?.scrollPosition?.current || 0);
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  const article = articleList.find(el => el.id === Number(articleId));
  const { text, title, imgFullXl } = article;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <Link
          to={backLinkHref.current}
          state={{ scroll: scrollPosition, showAllArticles: location.state?.showAllArticles }}
          className="inline-flex items-center gap-2 rounded-sm border border-vivid-orange px-4 py-1 text-sm font-bold uppercase tracking-wide text-vivid-orange transition-colors duration-300 hover:bg-vivid-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-vivid-orange focus:ring-offset-2"
        >
          <SpriteIcon icon="icon-back" className="h-[20px] w-[20px]" />
          Back
        </Link>

        <div className="mt-3 flex flex-wrap items-start justify-center gap-x-5 sm:mt-7 ml:flex-nowrap ml:justify-between">
          <div className="relative mb-7 after:clear-both after:block after:content-['']">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider sm:text-sm">
              {title[lng]}
            </h2>
            <img src={imgFullXl} alt="copper" loading="lazy" className="float-right mb-2 ml-4" />
            <p className="indent-7 text-sm ml:text-base">{text[lng]}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ArticleDetailsSection;
