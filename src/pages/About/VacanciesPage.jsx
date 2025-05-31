import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';
import image from 'assets/images/aboutUs/jobs.webp';

const VacanciesPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <SectionTitle text={t('vacanciesSection.title')} />
        <div className="mt-3 flex flex-wrap items-start justify-center gap-x-5 sm:mt-7 ml:flex-nowrap ml:justify-between">
          <div className="mb-7">
            <p className="text-xs uppercase tracking-widest sm:text-sm">
              {t('vacanciesSection.text')}
            </p>
          </div>

          <img src={image} alt="copper" loading="lazy" />
        </div>
      </Container>
    </section>
  );
};

export default VacanciesPage;
