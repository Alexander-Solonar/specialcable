import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/common/Container';
import UnderConstruction from 'components/common/UnderConstruction';

const NewsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <UnderConstruction title={t('newsSection.title')} text={t('newsSection.text')} />
      </Container>
    </section>
  );
};

export default NewsPage;
