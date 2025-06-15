import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfoPageBackground from './components/InfoPageBackground';
import Container from 'components/common/Container';
import UnderConstruction from 'components/common/UnderConstruction';

const SupplierInfoPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="flex flex-auto">
      <InfoPageBackground>
        <Container>
          <div>
            <UnderConstruction
              title={t('supplierInfoSection.title')}
              text={t('supplierInfoSection.text')}
            />
          </div>
        </Container>
      </InfoPageBackground>
    </section>
  );
};

export default SupplierInfoPage;
