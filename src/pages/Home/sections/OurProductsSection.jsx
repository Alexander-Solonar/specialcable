import { useTranslation } from 'react-i18next';

import ProductList from '../components/ProductList';
import Container from 'components/common/Container';
import PageLinkButton from 'components/buttons/PageLinkButton';
import SectionTitle from 'components/common/SectionTitle';

const OurProductsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-6 pt-6 sm:pb-12 sm:pt-32 ml:pb-14 xl:pb-[90px]">
      <Container>
        <div className="flex flex-col">
          <SectionTitle text={t('ourProductsSection.title')} />
          <ProductList />
          <PageLinkButton
            path="/catalog"
            text={t('ourProductsSection.btnShowAll')}
            addStyles="mx-auto"
          />
        </div>
      </Container>
    </section>
  );
};
export default OurProductsSection;
