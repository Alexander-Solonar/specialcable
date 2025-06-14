import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SliderControls from 'components/common/SliderControls';
import 'swiper/css';

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

const ProductCertificatesSlider = ({ certificates }) => {
  return (
    <div className="relative hidden ml:block ml:max-w-[40%]">
      <Swiper className="mySwiper" {...SWIPER_SETTINGS}>
        {certificates.map((certificate, index) => (
          <SwiperSlide key={index}>
            <img className="ml-auto" src={certificate} alt="certificate" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderControls
        color="space-blue"
        addStyle="flex justify-end items-center gap-x-2 pr-5 text-xs sm:gap-x-4 sm:text-base"
      />
    </div>
  );
};

export default ProductCertificatesSlider;
