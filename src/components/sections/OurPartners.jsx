import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import FullScreenLetter from '../utils/FullScreenLetter';
import PartnerLettersSlider from '../utils/PartnerLettersSlider';

import 'swiper/css';
import 'swiper/css/pagination';

const OurPartners = () => {
  const [image, setImage] = useState(null);
  const { t } = useTranslation();

  return (
    <section className="our-clients mx-auto pt-6 sm:pt-[70px] ml:pb-16 ml:pt-[120px]">
      <Container>
        <div className="max-w-[300px] sm:max-w-[420px]">
          <SectionTitle text={t('ourClients.title')} />
          <p className="mt-4 text-xs leading-4 sm:mt-10 sm:text-base sm:leading-7">
            {t('ourClients.description')}
          </p>
        </div>
      </Container>
      <PartnerLettersSlider setImage={setImage} />
      <FullScreenLetter image={image} />
    </section>
  );
};

export default OurPartners;
