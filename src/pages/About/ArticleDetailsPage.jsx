import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localArticle } from 'data/localArticle.js';
import * as APIFirebase from 'services/APIFirebase';
import Container from 'components/common/Container';
import SpriteIcon from 'components/common/SpriteIcon';

const ArticleDetailsPage = () => {
  const [article, setArticle] = useState([]);
  const { articleId } = useParams();
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const scrollPosition = useRef(location.state?.scrollPosition?.current || 0);

  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { text, title, imgFullXl } = article;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (articleId === 'local') {
      setArticle(...localArticle);
      setIsLoading(false);
      return;
    }

    (async () => {
      try {
        setArticle(await APIFirebase.getArticle(articleId));
      } catch (error) {
        // setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [articleId, setArticle]);

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <Link
          to={backLinkHref.current}
          state={{
            scroll: scrollPosition,
            showAllArticles: location.state?.showAllArticles,
          }}
          className="inline-flex w-fit items-center gap-2 rounded-sm border border-vivid-orange px-4 py-1 text-sm font-bold uppercase tracking-wide text-vivid-orange transition-colors duration-300 hover:bg-vivid-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-vivid-orange focus:ring-offset-2"
        >
          <SpriteIcon icon="icon-back" className="h-[20px] w-[20px]" />
          {t('articlesSection.btnBack')}
        </Link>

        {!isLoading && (
          <div className="mt-3 flex flex-wrap items-start justify-center gap-x-5 sm:mt-7 ml:flex-nowrap ml:justify-between">
            <div className="relative mb-7 after:clear-both after:block after:content-['']">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider sm:text-sm">
                {title[lng]}
              </h2>

              <img
                className="float-right mb-2 ml-8"
                src={imgFullXl}
                alt="copper"
                loading="lazy"
              />

              <p className="indent-7 text-sm ml:text-base">{text[lng]}</p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ArticleDetailsPage;
