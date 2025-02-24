import { useTranslation } from 'react-i18next';
import Container from '../common/Container';

const PromoSlide = ({ label, title, description, bgColor, imageXl, imageMl, imageSm }) => {
  const { t } = useTranslation();

  return (
    <div className={`py-9 pl-[15px] ml:py-11 bg-${bgColor} h-full`}>
      <div className="relative mx-auto h-full max-w-[1600px] overflow-x-hidden">
        <Container>
          <div className="flex h-full items-center justify-between gap-x-10 xl:gap-x-32">
            <div className="min-w-[200px] max-w-[300px] pb-10 pt-10 ml:min-w-[350px] ml:max-w-[500px]">
              <p className="absolute top-0 inline-block bg-midnight-blue px-3 text-[10px] font-bold uppercase leading-[1.5] tracking-widest text-white sm:text-xs">
                {t(label)}
              </p>
              <h2 className="text uppercase leading-tight tracking-[0.2em] text-white sm:text-2xl ml:text-3xl xl:text-6xl">
                {t(title)}
              </h2>
              <p className="mt-3 text-xs tracking-wide text-white sm:mt-5 sm:text-base ml:mt-10 ml:text-xl ml:uppercase ml:tracking-[0.27em] xl:text-3xl">
                {t(description)}
              </p>
            </div>

            <picture className="-mr-4 xl:-mr-48">
              <source media="(max-width: 481px)" srcSet={imageSm} />
              <source media="(max-width: 769px)" srcSet={imageMl} />
              <img src={imageXl} alt="cable" loading="lazy" className="h-auto w-auto" />
            </picture>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PromoSlide;
