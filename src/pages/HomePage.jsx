import React from 'react';

import MainBanner from '../components/sections/MainBaner';
import ProductCatalog from '../components/sections/ProductCatalog';
import PromoSlider from '../components/sections/PromoSlider';
import AboutUs from '../components/sections/AboutUs';
import CompanyStatistics from '../components/sections/CompanyStatistics';
import CallbackOrder from '../components/sections/CallbackOrder';
import OurClients from '../components/sections/OurClients';

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <ProductCatalog />
      <PromoSlider />
      <AboutUs />
      <CompanyStatistics />
      <OurClients />
      <CallbackOrder />
    </>
  );
};

export default HomePage;
