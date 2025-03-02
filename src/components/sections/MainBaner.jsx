import { useTranslation } from 'react-i18next';

import Container from '../common/Container';
import PageLinkButton from '../buttons/PageLinkButton';
import bannerXl from '../../assets/images/hero/bannerXl.webp';
import bannerMl from '../../assets/images/hero/bannerMl.webp';
import bannerSm from '../../assets/images/hero/bannerSm.webp';

const MainBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="h-44 sm:h-[288px] xl:h-[600px]">
      <Container>
        <div className="relative pt-11 sm:pt-6 xl:pt-28">
          {/*Заголовок заводу */}
          <p className="text-xs font-bold uppercase tracking-[0.12em] sm:hidden">
            {t('mainBanner.factory')}
          </p>

          {/* Основний заголовок */}
          <h1 className="mb-4 text-3xl uppercase tracking-[0.275em] sm:text-5xl xl:text-7xl">
            {t('mainBanner.title')}
          </h1>

          {/* Блок з відсотками та описом безпеки */}
          <div className="mt-5 hidden items-center gap-x-4 sm:mb-16 sm:flex">
            <p className="text-3xl tracking-[0.275em] sm:text-5xl xl:text-7xl">
              {t('mainBanner.safetyPercentage')}
            </p>
            <div>
              <p className="text-lg font-bold tracking-[0.1em]">{t('mainBanner.safety')}</p>
              <p className="text-xs font-bold tracking-[0.06em]">{t('mainBanner.savingLives')}</p>
            </div>
          </div>

          <PageLinkButton
            text={t('mainBanner.buttonText')}
            ariaLabel={t('mainBanner.buttonText')}
          />

          {/* Зображення баннера */}
          <picture className="absolute right-0 top-0 -z-[1]">
            <source media="(max-width: 424px)" srcSet={bannerSm} />
            <source media="(max-width: 1023px)" srcSet={bannerMl} />
            <img src={bannerXl} alt="Responsive Banner" className="h-auto w-full" />
          </picture>

          {/* Фоновий блок */}
          <div className="absolute -right-4 top-7 -z-[2] h-[163px] w-[156px] bg-deep-blue sm:-right-20 sm:top-8 sm:h-[312px] sm:w-[304px] xl:-right-52 xl:top-9 xl:h-[695px] xl:w-[790px]"></div>
        </div>
      </Container>
    </section>
  );
};

export default MainBanner;
