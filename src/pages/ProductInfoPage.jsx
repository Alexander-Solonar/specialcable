import { useState } from 'react';
import Container from 'components/common/Container';
import ProductBreadcrumbs from 'components/sections/productInfo-sections/ProductBreadcrumbs';
import ProductHeaderSection from 'components/sections/productInfo-sections/ProductHeaderSection';
import ProductInfoTabs from 'components/sections/productInfo-sections/ProductInfoTabs';
import ProductSize from 'components/sections/productInfo-sections/ProductSize';
import ProductSpecifications from 'components/sections/productInfo-sections/ProductSpecifications';
import ProductCertificatesSlider from 'components/sections/productInfo-sections/ProductCertificatesSlider';
import ProductCertificatesMobile from 'components/sections/productInfo-sections/ProductCertificatesMobile';

const ProductInfoPage = () => {
  const [activeTab, setActiveTab] = useState('specs');

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
