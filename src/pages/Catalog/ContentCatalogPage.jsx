import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Context } from 'context/Context';
import catalogImg from 'assets/images/catalog-img.webp';
import Container from 'components/common/Container';
import CatalogCategorySection from './sections/CatalogCategorySection';

const ContentCatalogPage = () => {
  const { catalogId } = useParams();
  const { productList } = useContext(Context);
  const [productItems, setCatalogItems] = useState(null);
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    setCatalogItems(productList.find(({ path }) => path === catalogId));
  }, [catalogId, productList]);

  if (!productItems) {
    return null;
  }

  return (
    <section>
      <Container>
        <div className="overflow-hidden pb-28 ml:pb-44">
          <h1 className="mb-3 text-lg uppercase tracking-widest ml:text-4xl">
            {productItems.title[lng]}
          </h1>
          <img className="-ml-[30%] mb-2" src={catalogImg} alt="cable" />
          <ul className="flex flex-wrap gap-x-4 gap-y-8">
            {productItems.category.map(({ cableTitle, cableTypes }, id) => (
              <CatalogCategorySection
                key={id}
                cableTitle={cableTitle}
                cableTypes={cableTypes}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ContentCatalogPage;
