import React from 'react';

import MainBanner from '../components/sections/MainBaner';
import ProductCatalog from '../components/sections/ProductCatalog';
import PromoSlider from '../components/sections/PromoSlider';
import AboutUs from '../components/sections/AboutUs';
import CompanyStatistics from '../components/sections/CompanyStatistics';
import OurPartners from '../components/sections/OurPartners';

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <ProductCatalog />
      <PromoSlider />
      <AboutUs />
      <CompanyStatistics />
      <OurPartners />
    </>
  );
};

export default HomePage;
