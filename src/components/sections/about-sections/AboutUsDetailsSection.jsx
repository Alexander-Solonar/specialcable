import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';
import image from 'assets/images/aboutUs/copper.webp';

const PARAGRAPHS = [
  'aboutUs.paragraph1',
  'aboutUs.paragraph2',
  'aboutUs.paragraph3',
  'aboutUs.paragraph4',
  'aboutUs.paragraph5',
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
