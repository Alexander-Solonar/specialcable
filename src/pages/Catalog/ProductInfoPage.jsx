import { useEffect, useState } from 'react';
import Container from 'components/common/Container';
import ProductBreadcrumbs from './components/ProductBreadcrumbs';
import ProductHeaderSection from './sections/ProductHeaderSection';
import ProductInfoTabs from './components/ProductInfoTabs';
import ProductSpecifications from './sections/ProductSpecifications';
import ProductSize from './sections/ProductSize';
import ProductCertificatesSlider from './sections/ProductCertificatesSlider';
import ProductCertificatesMobile from './sections/ProductCertificatesMobile';

const ProductInfoPage = () => {
  const [activeTab, setActiveTab] = useState('specs');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pb-9 ml:pb-24">
      <Container>
        <ProductBreadcrumbs />
        <ProductHeaderSection />
        <ProductInfoTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="items-start gap-8 ml:flex">
          <div className="ml:w-[calc(60%-1rem)]">
            {activeTab === 'specs' && <ProductSpecifications />}
            {activeTab === 'size' && <ProductSize />}
          </div>
          <ProductCertificatesSlider />
          <ProductCertificatesMobile />
        </div>
      </Container>
    </section>
  );
};

export default ProductInfoPage;
