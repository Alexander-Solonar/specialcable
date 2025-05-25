import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import catalogImg from '../../../assets/images/catalog-img.webp';
import Container from 'components/common/Container';
import data from '../../../data/catalog';

const ContentCatalogSection = () => {
  const { catalogId } = useParams();
  const [showAllArticles, setShowAllArticles] = useState(null);

  useEffect(() => {
    setShowAllArticles(data.find(({ path }) => path === catalogId));
  }, [catalogId]);

  if (!showAllArticles) {
    return null;
  }

  return (
    <section>
      <Container>
        <div className="overflow-hidden pb-28 ml:pb-44">
          <h1 className="mb-3 text-lg uppercase tracking-widest ml:text-4xl">
            {showAllArticles.title}
          </h1>
          <img className="-ml-[30%] mb-2" src={catalogImg} alt="cable" />
          <ul className="flex flex-wrap gap-x-4 gap-y-8">
            {showAllArticles.category.map(({ cableTitle, cableTypes }, id) => (
              <li key={id} className="w-[calc(50%-1rem)] ml:w-[calc(25%-1rem)]">
                <h2 className="mb-3 text-xs font-bold uppercase tracking-widest ml:text-sm">
                  {cableTitle}
                </h2>
                <ul>
                  {cableTypes.map(element => (
                    <li key={element} className="text-xs sm:text-base">
                      <Link to={element}>{element}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ContentCatalogSection;
