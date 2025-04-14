import ProductList from 'components/utils/ProductList';
import Container from 'components/common/Container';
import PageLinkButton from 'components/buttons/PageLinkButton';
import SectionTitle from 'components/common/SectionTitle';

const OurProductsSection = () => {
  return (
    <section className="pb-6 pt-6 sm:pb-12 sm:pt-32 ml:pb-14 xl:pb-[90px]">
      <Container>
        <div className="flex flex-col">
          <SectionTitle text="наша продукция" />
          <ProductList />
          <PageLinkButton text="Смотреть всё" addStyles="mx-auto" />
        </div>
      </Container>
    </section>
  );
};
export default OurProductsSection;
