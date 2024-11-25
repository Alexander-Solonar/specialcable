import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import MainButton from '../buttons/MainButton';
import bannerXl from '../../assets/images/bannerXl.webp';
import bannerMl from '../../assets/images/bannerMl.webp';
import bannerSm from '../../assets/images/bannerSm.webp';

const MainBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="h-44 sm:h-[288px] ml:h-[600px]">
      <Container>
        <div className="relative pt-11 sm:pt-6 ml:pt-28">
          {/*Заголовок заводу */}
          <p className="text-xs font-bold uppercase tracking-[0.12em] sm:hidden">
            {t('mainBanner.factory')}
          </p>

          {/* Основний заголовок */}
          <h1 className="mb-4 text-3xl uppercase tracking-[0.275em] sm:text-5xl ml:text-7xl">
            {t('mainBanner.title')}
          </h1>

          {/* Блок з відсотками та описом безпеки */}
          <div className="mt-5 hidden items-center gap-x-4 sm:mb-16 sm:flex">
            <p className="text-3xl tracking-[0.275em] sm:text-5xl ml:text-7xl">
              {t('mainBanner.safetyPercentage')}
            </p>
            <div>
              <p className="text-lg font-bold tracking-[0.1em]">{t('mainBanner.safety')}</p>
              <p className="text-xs font-bold tracking-[0.06em]">{t('mainBanner.savingLives')}</p>
            </div>
          </div>

          <MainButton text={t('mainBanner.buttonText')} ariaLabel={t('mainBanner.buttonText')} />

          {/* Зображення баннера */}
          <picture className="absolute right-0 top-0 -z-[1]">
            <source media="(max-width: 480px)" srcSet={bannerSm} />
            <source media="(max-width: 768px)" srcSet={bannerMl} />
            <img src={bannerXl} alt="Responsive Banner" className="h-auto w-full" />
          </picture>

          {/* Фоновий блок */}
          <div className="absolute -right-4 top-7 -z-[2] h-[163px] w-[156px] bg-deep-blue sm:-right-20 sm:top-8 sm:h-[312px] sm:w-[304px] ml:-right-52 ml:top-9 ml:h-[695px] ml:w-[790px]"></div>
        </div>
      </Container>
    </section>
  );
};

export default MainBanner;
