import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';

const GalleryPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <SectionTitle text={t('gallerySection.title')} />
        <div className="mt-3 sm:mt-7">
          <p className="text-xs uppercase tracking-widest sm:text-sm">
            {t('gallerySection.text')}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default GalleryPage;
