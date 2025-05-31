import { useContext, useEffect } from 'react';
import { Context } from 'context/Context';
import * as APIFirebase from 'services/APIFirebase';
import MainBanner from './sections/MainBanner';
import OurProductsSection from './sections/OurProductsSection';
import PromoSlider from './sections/PromoSlider';
import AboutUsPreviewSection from './sections/AboutUsPreviewSection';
import StatisticsSection from './sections/StatisticsSection';
import ClientTrustSection from './sections/ClientTrustSection';

const HomePage = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { setProductList } = useContext(Context);

  useEffect(() => {
    (async () => {
      try {
        setProductList(await APIFirebase.getProductList());
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
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
