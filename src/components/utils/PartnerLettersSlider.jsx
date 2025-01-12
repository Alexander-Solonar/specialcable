import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Context } from '../../context/Context';
import { sliderData } from '../../data/partnerLettersSlider';

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

const PartnerLettersSlider = ({ setImage }) => {
  const { isModalOpen, setIsModalOpen } = useContext(Context);

  const handleSlideClick = (letter, e) => {
    const activeIndex = e.target.className.includes('swiper-slide-active');
    if (activeIndex) {
      setImage(letter);
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <Swiper {...SWIPER_SETTINGS} className="mySwiper pb-14 pt-4 sm:pb-28 sm:pt-9">
      {sliderData.map(({ id, letter }) => (
        <SwiperSlide
          onClick={e => {
            handleSlideClick(letter, e);
          }}
          key={id}
          className="flex h-[96px] w-[64px] items-center justify-center text-lg opacity-70 shadow-[1px_10px_20px_0px_rgba(0,0,0,0.25)] sm:h-[232px] sm:w-[160px] ml:h-[260px] ml:w-[180px]"
        >
          <img src={letter} className="pointer-events-none h-full w-auto" alt="letter-of-thanks" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnerLettersSlider;
