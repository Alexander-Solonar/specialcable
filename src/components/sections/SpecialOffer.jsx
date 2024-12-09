import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import Slide from '../Slide';
import SlideNavigation from '../SlideNavigation';

const SWIPER_SETTINGS = {
  speed: 1500,
  pagination: {
    type: 'fraction',
    el: '.custom-pagination',
  },
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  modules: [Pagination, Navigation],
};

const SpecialOffer = () => {
  return (
    <section className="relative">
      <Swiper {...SWIPER_SETTINGS} className="mySwiper">
        <SwiperSlide>
          <Slide bgColor="vivid-orange" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide bgColor="deep-blue" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide bgColor="vivid-red" />
        </SwiperSlide>
      </Swiper>

      {/* Навигация */}
      <SlideNavigation />
    </section>
  );
};

export default SpecialOffer;
