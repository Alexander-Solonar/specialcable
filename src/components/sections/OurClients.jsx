import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Modal from '../common/Modal';
import letterOfThanks from '../../assets/images/letterOfThanks.webp';

import 'swiper/css';
import 'swiper/css/pagination';

const SWIPER_SETTINGS = {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: 'auto',
  pagination: {
    bulletClass: 'swiper-pagination-bullet bg-gray',
    bulletActiveClass: 'swiper-pagination-bullet-active bg-gray',
  },
  centeredSlides: 'auto',
  modules: [Pagination],
};

const OurClients = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [text, setText] = useState('');
  const { t } = useTranslation();

  const handleClick = (i, e) => {
    const activeIndex = e.target.className.includes('swiper-slide-active');
    if (activeIndex) {
      setText(letterOfThanks);
      setIsOpenModal(!isOpenModal);
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

        <Swiper {...SWIPER_SETTINGS} className="mySwiper pb-14 pt-4 sm:pb-28 sm:pt-9">
          {Array.from({ length: 8 }, (_, i) => (
            <SwiperSlide
              onClick={e => {
                handleClick(i, e);
              }}
              key={i}
              className="flex h-[96px] w-[64px] items-center justify-center text-lg opacity-70 shadow-[1px_10px_20px_0px_rgba(0,0,0,0.25)] sm:h-[232px] sm:w-[160px] ml:h-[260px] ml:w-[180px]"
            >
              <img
                src={letterOfThanks}
                className="pointer-events-none h-full w-auto"
                alt="letter-of-thanks"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} text={text} />
    </section>
  );
};

export default OurClients;
