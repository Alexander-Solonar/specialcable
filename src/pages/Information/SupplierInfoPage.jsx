import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';

const SupplierInfoPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <Container>
        <SectionTitle text={t('supplierInfoSection.title')} />
        <div className="mt-3 sm:mt-7">
          <p className="text-xs uppercase tracking-widest sm:text-sm">
            {t('supplierInfoSection.text')}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SupplierInfoPage;
