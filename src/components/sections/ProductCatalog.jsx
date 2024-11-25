import React from 'react';

import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import ProductCard from '../ProductCard';
import MainButton from '../buttons/MainButton';

const ProductCatalog = () => {
  return (
    <section className="pb-6 pt-6 sm:pb-12 sm:pt-32">
      <Container>
        <SectionTitle text="наша продукция" />
        <ul className="mb-12 mt-12 flex flex-wrap justify-center gap-5 sm:mt-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
        <MainButton text="Смотреть всё" addStyles="mx-auto" />
      </Container>
    </section>
  );
};

export default ProductCatalog;
