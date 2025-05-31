import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCloseOnResize } from 'hooks/useCloseOnResize';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';
import SpriteIcon from 'components/common/SpriteIcon';
import image from 'assets/images/aboutUs/copper.webp';

const AboutUsPreviewSection = () => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);
  const { t } = useTranslation();
  const BREAKPOINT = 481;

  // Виклик хука для закриття меню при зміні розміру екрана
  useCloseOnResize(setIsReadMoreShown, BREAKPOINT);

  return (
    <section className="relative pb-8 pt-4 sm:pb-28 sm:pt-12 ml:pb-32 ml:pt-28">
      <div className="absolute left-1/2 top-0 h-full w-full max-w-[1600px] -translate-x-1/2 bg-bg-aboutUs bg-contain bg-position-aboutUs bg-no-repeat sm:bg-cover ml:bg-contain"></div>
      <Container>
        <div className="flex items-center justify-between gap-x-5">
          <div className="indent-7 text-xs sm:max-w-[600px] sm:text-base ml:min-w-[400px] ml:max-w-[582px]">
            <SectionTitle text={t('aboutUsSection.title')} />
            <p className="mb-4 mt-3 sm:mt-8">
              {t('aboutUsSection.paragraph1')}
            </p>
            <p className="hidden sm:block">{t('aboutUsSection.paragraph2')}</p>
            {isReadMoreShown && (
              <p className="sm:hidden">{t('aboutUsSection.paragraph2')}</p>
            )}
            <button
              onClick={() => setIsReadMoreShown(!isReadMoreShown)}
              className="ml-auto flex items-center gap-x-1 sm:hidden"
            >
              <span className="underline">
                {isReadMoreShown
                  ? t('aboutUsSection.buttonHide')
                  : t('aboutUsSection.buttonMore')}
              </span>
              <SpriteIcon
                icon={isReadMoreShown ? 'rectangle-up' : 'rectangle-down'}
                className="h-2.5 w-2.5"
              />
            </button>
          </div>
          <div className="hidden min-w-72 ml:block">
            <img src={image} alt="copper" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsPreviewSection;
