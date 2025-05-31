import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import catalogImg from 'assets/images/catalog-img.webp';
import Container from 'components/common/Container';
import CatalogCategorySection from './sections/CatalogCategorySection';
import data from 'data/catalog';

const ContentCatalogPage = () => {
  const { catalogId } = useParams();
  const [catalogItems, setCatalogItems] = useState(null);

  useEffect(() => {
    setCatalogItems(data.find(({ path }) => path === catalogId));
  }, [catalogId]);

  if (!catalogItems) {
    return null;
  }

  return (
    <section>
      <Container>
        <div className="overflow-hidden pb-28 ml:pb-44">
          <h1 className="mb-3 text-lg uppercase tracking-widest ml:text-4xl">
            {catalogItems.title}
          </h1>
          <img className="-ml-[30%] mb-2" src={catalogImg} alt="cable" />
          <ul className="flex flex-wrap gap-x-4 gap-y-8">
            {catalogItems.category.map(({ cableTitle, cableTypes }, id) => (
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
