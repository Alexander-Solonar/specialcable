import { useTranslation } from 'react-i18next';

import image from '../../assets/images/aboutUs/copper.webp';
import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import { useEffect } from 'react';

const AboutUsDetailsSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <SectionTitle text={t('aboutUs.title')} />
        <div className="mt-3 flex flex-wrap items-start justify-center gap-x-5 sm:mt-7 xl:flex-nowrap xl:justify-between">
          <div className="mb-7 max-w-[780px] indent-8 text-xs sm:text-base">
            <p className="mb-4">{t('aboutUs.firstParagraph')}</p>
            <p className="mb-4">{t('aboutUs.secondParagraph')}</p>
            <p className="mb-4">{t('aboutUs.thirdParagraph')}</p>
            <p className="mb-4">{t('aboutUs.fourthParagraph')}</p>
            <p>{t('aboutUs.fifthParagraph')}</p>
          </div>

          <img src={image} alt="copper" />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsDetailsSection;
