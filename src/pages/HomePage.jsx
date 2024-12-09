import React from 'react';
import MainBanner from '../components/sections/MainBaner';
import ProductCatalog from '../components/sections/ProductCatalog';
import SpecialOffer from '../components/sections/SpecialOffer';
import AboutUs from '../components/sections/AboutUs';

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <ProductCatalog />
      <SpecialOffer />
      <AboutUs />
    </>
  );
};

export default HomePage;