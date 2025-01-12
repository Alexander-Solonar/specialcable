import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import imageXl from '../../assets/images/promo-slide-xl.webp';
import imageMl from '../../assets/images/promo-slide-ml.webp';
import imageSm from '../../assets/images/promo-slide-xl.webp';

const PromoSlide = ({ label, title, description, bgColor }) => {
  const { t } = useTranslation();

  return (
    <div className={`overflow-x-hidden bg-${bgColor}`}>
      <Container>
        <div className="max-w-44 pb-10 pt-10 sm:max-w-60 sm:pb-[90px] sm:pt-20 ml:max-w-[500px] ml:pb-28 ml:pt-32">
          <p className="absolute left-0 top-1.5 bg-midnight-blue px-3 text-xs font-bold uppercase leading-[1.5] tracking-widest text-white sm:left-4 sm:top-10 ml:top-8">
            {t(label)}
          </p>
          <h2 className="text-sm uppercase leading-tight tracking-[0.2em] text-white sm:text-2xl ml:text-6xl">
            {t(title)}
          </h2>
          <p className="mt-3 text-xs text-white sm:mt-5 sm:text-base ml:mt-10 ml:text-3xl ml:uppercase ml:tracking-[0.27em]">
            {t(description)}
          </p>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 sm:-right-16 sm:pl-[280px] ml:-right-64 ml:pl-[470px]">
          <picture>
            <source media="(max-width: 481px)" srcSet={imageSm} />
            <source media="(max-width: 769px)" srcSet={imageMl} />
            <img src={imageXl} alt="cable" loading="lazy" />
          </picture>
        </div>
      </Container>
    </div>
  );
};

export default PromoSlide;
