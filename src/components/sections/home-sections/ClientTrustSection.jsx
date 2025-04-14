import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Context } from 'context/Context';
import { sliderData } from 'data/partnerLettersSlider';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';
import FullScreenLetter from 'components/utils/FullScreenLetter';
import 'swiper/css';
import 'swiper/css/pagination';

const SWIPER_SETTINGS = {
  loop: true,
  spaceBetween: 34,
  grabCursor: true,
  slidesPerView: 'auto',
  pagination: {
    bulletClass: 'swiper-pagination-bullet bg-gray',
    bulletActiveClass: 'swiper-pagination-bullet-active bg-gray',
  },
  centeredSlides: 'auto',
  modules: [Pagination],
};

const ClientTrustSection = () => {
  const [image, setImage] = useState(null);
  const { t } = useTranslation();
  const { isModalOpen, setIsModalOpen } = useContext(Context);

  const handleSlideClick = (letter, e) => {
    const activeIndex = e.target.className.includes('swiper-slide-active');
    if (activeIndex) {
      setImage(letter);
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <section className="our-clients mx-auto pt-6 sm:pt-[70px] ml:pb-16 ml:pt-[120px]">
      <Container>
        <div className="max-w-[300px] sm:max-w-[420px]">
          <SectionTitle text={t('ourClients.title')} />
          <p className="mt-4 text-xs leading-4 sm:mt-10 sm:text-base sm:leading-7">
            {t('ourClients.description')}
          </p>
        </div>
        <Swiper
          {...SWIPER_SETTINGS}
          className="mySwiper w-full pb-14 pt-4 sm:pb-28 sm:pt-9"
        >
          {sliderData.map(({ id, letter }) => (
            <SwiperSlide
              onClick={e => {
                handleSlideClick(letter, e);
              }}
              key={id}
              className="flex h-[96px] w-[64px] items-center justify-center text-lg opacity-70 shadow-[1px_10px_20px_0px_rgba(0,0,0,0.25)] sm:h-[232px] sm:w-[160px] ml:h-[260px] ml:w-[180px]"
            >
              <img
                src={letter}
                className="pointer-events-none h-full w-auto"
                alt="letter-of-thanks"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <FullScreenLetter image={image} />
    </section>
  );
};

export default ClientTrustSection;
