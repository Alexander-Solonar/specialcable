import React from 'react';

import MainBanner from '../components/sections/MainBaner';
import ProductCatalog from '../components/sections/ProductCatalog';
import PromoSlider from '../components/sections/PromoSlider';
import AboutUsPreviewSection from '../components/sections/AboutUsPreviewSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import ClientTrustSection from '../components/sections/ClientTrustSection';

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <ProductCatalog />
      <PromoSlider />
      <AboutUsPreviewSection />
      <StatisticsSection />
      <ClientTrustSection />
    </>
  );
};

export default HomePage;
