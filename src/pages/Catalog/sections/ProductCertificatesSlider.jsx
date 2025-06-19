import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SliderControls from 'components/common/SliderControls';
import 'swiper/css';
import { useContext } from 'react';
import { Context } from 'context/Context';

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

const ProductCertificatesSlider = ({ certificates, setModalImage }) => {
  const { isModalOpen, setIsModalOpen } = useContext(Context);

  const handleImageClick = imageSrc => {
    setModalImage(imageSrc);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative hidden ml:block ml:max-w-[40%]">
      <Swiper className="mySwiper" {...SWIPER_SETTINGS}>
        {certificates.map((certificate, index) => (
          <SwiperSlide key={index}>
            <img
              className="ml-auto cursor-pointer"
              src={certificate}
              alt="certificate"
              width={380}
              onClick={() => handleImageClick(certificate)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderControls
        color="space-blue"
        addStyle="flex mt-2 justify-end items-center gap-x-2 pr-5 text-xs sm:gap-x-4 sm:text-base"
      />
    </div>
  );
};

export default ProductCertificatesSlider;
