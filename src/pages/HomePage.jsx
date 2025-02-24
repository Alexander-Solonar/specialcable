import React, { useEffect, useState } from 'react';
import * as APIFirebase from '../services/APIFirebase';

import MainBanner from '../components/sections/MainBaner';
import ProductCatalog from '../components/sections/ProductCatalog';
import PromoSlider from '../components/sections/PromoSlider';
import AboutUsPreviewSection from '../components/sections/AboutUsPreviewSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import ClientTrustSection from '../components/sections/ClientTrustSection';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <ProductCatalog productsList={productsList} />
      <PromoSlider />
      <AboutUsPreviewSection />
      <StatisticsSection />
      <ClientTrustSection />
    </>
  );
};

export default HomePage;
