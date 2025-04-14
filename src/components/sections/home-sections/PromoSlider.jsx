import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { sliderData } from 'data/promoSlider';
import PromoSlide from 'components/utils/PromoSlide';
import PromoSliderControls from 'components/utils/PromoSliderControls';
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
      <PromoSliderControls />
    </section>
  );
};

export default PromoSlider;
