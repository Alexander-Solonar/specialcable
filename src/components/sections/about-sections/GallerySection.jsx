import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';

const GallerySection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <SectionTitle text={t('gallery.title')} />
        <div className="mt-3 sm:mt-7">
          <p className="text-xs uppercase tracking-widest sm:text-sm">{t('gallery.text')}</p>
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
