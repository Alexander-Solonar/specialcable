import React from 'react';
import MainBanner from '../components/sections/MainBaner';
import ProductCatalog from '../components/sections/ProductCatalog';
import SpecialOffer from '../components/sections/SpecialOffer';
import AboutUs from '../components/sections/AboutUs';
import CompanyStatistics from '../components/sections/CompanyStatistics';

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <ProductCatalog />
      <SpecialOffer />
      <AboutUs />
      <CompanyStatistics />
    </>
  );
};

export default HomePage;
