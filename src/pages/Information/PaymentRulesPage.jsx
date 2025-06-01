import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';

const PaymentRulesSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <Container>
        <SectionTitle title={t('paymentRulesSection.title')} />

        <ul className="mt-8 flex max-w-[700px] flex-col gap-8 text-sm ml:text-base">
          <li>{t('paymentRulesSection.paragraph1')}</li>
          <li>{t('paymentRulesSection.paragraph2')}</li>
          <li>{t('paymentRulesSection.paragraph3')}</li>
        </ul>
      </Container>
    </section>
  );
};

export default PaymentRulesSection;
