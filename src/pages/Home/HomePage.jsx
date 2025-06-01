import MainBanner from './sections/MainBanner';
import OurProductsSection from './sections/OurProductsSection';
import PromoSlider from './sections/PromoSlider';
import AboutUsPreviewSection from './sections/AboutUsPreviewSection';
import StatisticsSection from './sections/StatisticsSection';
import ClientTrustSection from './sections/ClientTrustSection';

const HomePage = () => {
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
