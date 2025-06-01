import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/common/Container';
import UnderConstruction from 'components/common/UnderConstruction';

const SupplierInfoPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <Container>
        <UnderConstruction
          title={t('supplierInfoSection.title')}
          text={t('supplierInfoSection.text')}
        />
      </Container>
    </section>
  );
};

export default SupplierInfoPage;
