import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import * as APIFirebase from '../services/APIFirebase';

import MainBanner from '../components/sections/home-sections/MainBaner';
import OurProductsSection from '../components/sections/home-sections/OurProductsSection';
import PromoSlider from '../components/sections/home-sections/PromoSlider';
import AboutUsPreviewSection from '../components/sections/home-sections/AboutUsPreviewSection';
import StatisticsSection from '../components/sections/home-sections/StatisticsSection';
import ClientTrustSection from '../components/sections/home-sections/ClientTrustSection';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setProductList } = useContext(Context);

  console.log(isLoading, error);

  useEffect(() => {
    (async () => {
      try {
        setProductList(await APIFirebase.getProductList());
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [setProductList]);

  return (
    <>
      <MainBanner />
      <OurProductsSection />
      <PromoSlider />
      <AboutUsPreviewSection />
      <StatisticsSection />
      <ClientTrustSection />
    </>
  );
};

export default HomePage;
