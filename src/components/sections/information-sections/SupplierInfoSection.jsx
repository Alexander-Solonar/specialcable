import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'components/common/SectionTitle';

const SupplierInfoSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <SectionTitle text={t('supplierInfoSection.title')} />
      <div className="mt-3 sm:mt-7">
        <p className="text-xs uppercase tracking-widest sm:text-sm">
          {t('supplierInfoSection.text')}
        </p>
      </div>
    </section>
  );
};

export default SupplierInfoSection;
