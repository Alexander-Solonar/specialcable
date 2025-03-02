import React, { useEffect, useState } from 'react';
import * as APIFirebase from '../services/APIFirebase';
import { useTranslation } from 'react-i18next';

import MainBanner from '../components/sections/MainBaner';
import OurProductsSection from '../components/sections/OurProductsSection';
import PromoSlider from '../components/sections/PromoSlider';
import AboutUsPreviewSection from '../components/sections/AboutUsPreviewSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import ClientTrustSection from '../components/sections/ClientTrustSection';

const HomePage = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(isLoading, error);

  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    (async () => {
      try {
        setProductsList(await APIFirebase.getProductsList(lng));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [lng]);

  return (
    <>
      <MainBanner />
      <OurProductsSection productsList={productsList} />
      <PromoSlider />
      <AboutUsPreviewSection />
      <StatisticsSection />
      <ClientTrustSection />
    </>
  );
};

export default HomePage;
