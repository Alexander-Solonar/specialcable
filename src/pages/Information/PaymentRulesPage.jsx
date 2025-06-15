import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfoPageBackground from './components/InfoPageBackground';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';

const PaymentRulesSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="flex flex-auto">
      <InfoPageBackground>
        <Container>
          <SectionTitle title={t('paymentRulesSection.title')} />

          <ul className="mt-8 flex max-w-[700px] flex-col gap-8 text-sm ml:text-base">
            <li>{t('paymentRulesSection.paragraph1')}</li>
            <li>{t('paymentRulesSection.paragraph2')}</li>
            <li>{t('paymentRulesSection.paragraph3')}</li>
          </ul>
        </Container>
      </InfoPageBackground>
    </section>
  );
};

export default PaymentRulesSection;
