import { useTranslation } from 'react-i18next';

import image from '../../assets/images/aboutUs/copper.webp';
import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import { useEffect } from 'react';

const PARAGRAPHS = [
  'aboutUs.firstParagraph',
  'aboutUs.secondParagraph',
  'aboutUs.thirdParagraph',
  'aboutUs.fourthParagraph',
  'aboutUs.fifthParagraph',
];

const AboutUsDetailsSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <SectionTitle text={t('aboutUs.title')} />
        <div className="mt-3 flex flex-wrap-reverse items-start justify-center gap-5 sm:mt-7 xl:flex-nowrap xl:justify-between">
          <div className="flex max-w-[780px] flex-col space-y-4 indent-8 text-xs sm:text-base">
            {PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{t(paragraph)}</p>
            ))}
          </div>

          <img src={image} alt="copper" loading="lazy" />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsDetailsSection;
