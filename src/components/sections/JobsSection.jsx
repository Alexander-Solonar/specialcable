import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import image from '../../assets/images/aboutUs/jobs.webp';

const JobsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-8 sm:pb-28 ml:pb-32">
      <Container>
        <SectionTitle text={t('jobs.title')} />
        <div className="mt-3 flex flex-wrap items-start justify-center gap-x-5 sm:mt-7 xl:flex-nowrap xl:justify-between">
          <div className="mb-7">
            <p className="text-xs uppercase tracking-widest sm:text-sm">{t('jobs.text')}</p>
          </div>

          <img src={image} alt="copper" />
        </div>
      </Container>
    </section>
  );
};

export default JobsSection;
