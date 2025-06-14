import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as APIFirebase from 'services/APIFirebase';
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
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    (async () => {
      try {
        setProduct(await APIFirebase.getProduct(productId));
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    })();
  }, [productId, setProduct]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!product) {
    return null;
  }

  return (
    <section className="pb-9 ml:pb-24">
      <Container>
        <ProductBreadcrumbs />
        <ProductHeaderSection
          title={product.title[lng]}
          description={product.description[lng]}
        />
        <ProductInfoTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="items-start gap-8 ml:flex">
          <div className="ml:w-[calc(60%-1rem)]">
            {activeTab === 'specs' && (
              <ProductSpecifications
                termsOfUse={product.termsOfUse[lng]}
                construction={product.construction[lng]}
              />
            )}
            {activeTab === 'size' && (
              <ProductSize
                twinCore={product.twinCore[lng]}
                fourCore={product.fourCore[lng]}
              />
            )}
          </div>
          <ProductCertificatesSlider certificates={product.certificates} />
          <ProductCertificatesMobile certificates={product.certificates} />
        </div>
      </Container>
    </section>
  );
};

export default ProductInfoPage;
