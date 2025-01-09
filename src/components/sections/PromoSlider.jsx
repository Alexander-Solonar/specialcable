import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { data } from '../../data/promoSlide';

import PromoSlide from '../PromoSlide';
import PromoSliderControls from '../PromoSliderControls';

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
        {data.map(slide => (
          <SwiperSlide key={slide.id}>
            <PromoSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Навигация */}
      <PromoSliderControls />
    </section>
  );
};

export default PromoSlider;
