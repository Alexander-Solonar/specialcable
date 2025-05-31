import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import sertificate1 from '../../../assets/images/certificate_1.webp';
import sertificate2 from '../../../assets/images/certificate_2.webp';
import SliderControls from 'components/common/SliderControls';

const SWIPER_SETTINGS = {
  slidesPerView: '1',
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

const ProductCertificatesSlider = () => {
  return (
    <div className="relative hidden ml:block ml:max-w-[40%]">
      <Swiper className="mySwiper" {...SWIPER_SETTINGS}>
        <SwiperSlide>
          <img className="ml-auto" src={sertificate1} alt="sertificate" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="ml-auto" src={sertificate2} alt="sertificate" />
        </SwiperSlide>
      </Swiper>
      <SliderControls
        color="space-blue"
        addStyle="flex justify-end items-center gap-x-2 pr-5 text-xs sm:gap-x-4 sm:text-base"
      />
    </div>
  );
};

export default ProductCertificatesSlider;
