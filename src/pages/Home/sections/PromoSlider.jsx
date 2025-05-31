import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { sliderData } from 'data/promoSlider';
import PromoSlide from '../components/PromoSlide';
import SliderControls from 'components/common/SliderControls';
import 'swiper/css';

const SWIPER_SETTINGS = {
  speed: 1500,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    type: 'fraction',
    el: '.custom-pagination',
  },
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  modules: [Pagination, Navigation, Autoplay],
};

const PromoSlider = () => {
  return (
    <section className="relative">
      <Swiper {...SWIPER_SETTINGS} className="mySwiper">
        {sliderData.map(slide => (
          <SwiperSlide key={slide.id}>
            <PromoSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Навігація Слайдера */}
      <SliderControls addStyle="absolute bottom-2 left-1/2 z-10 flex w-full max-w-[1200px] -translate-x-1/2 justify-start gap-x-2 pl-4 text-xs text-white sm:bottom-11 sm:gap-x-4 sm:text-base ml:bottom-[54px]" />
    </section>
  );
};

export default PromoSlider;
