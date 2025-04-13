import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../common/SectionTitle';

const PaymentRulesSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <SectionTitle text={t('payment-rules.title')} />

      <ul className="mt-8 flex max-w-[700px] flex-col gap-8 text-sm ml:text-base">
        <li>{t('payment-rules.paragraph1')}</li>
        <li>{t('payment-rules.paragraph2')}</li>
        <li>{t('payment-rules.paragraph3')}</li>
      </ul>
    </section>
  );
};

export default PaymentRulesSection;
