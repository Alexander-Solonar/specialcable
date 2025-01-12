import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import ProductCard from '../utils/ProductCard';
import MainButton from '../buttons/MainButton';

const ProductCatalog = () => {
  return (
    <section className="pb-6 pt-6 sm:pb-12 sm:pt-32 ml:pb-14 xl:pb-[90px]">
      <Container>
        <SectionTitle text="наша продукция" />
        <div className="flex flex-col">
          <ul className="mb-12 mt-12 flex flex-wrap justify-center gap-5 sm:mt-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
          <MainButton text="Смотреть всё" addStyles="mx-auto" />
        </div>
      </Container>
    </section>
  );
};

export default ProductCatalog;
