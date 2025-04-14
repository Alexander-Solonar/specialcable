import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'components/common/SectionTitle';

const ContractorRulesSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <SectionTitle text={t('contractor-rules.title')} />
      <div className="mt-8 flex max-w-[700px] flex-col gap-8 text-sm ml:text-base">
        <p>{t('contractor-rules.description')}</p>
        <ol className="list-inside list-decimal">
          <li>{t('contractor-rules.document1')}</li>
          <li>{t('contractor-rules.document2')}</li>
          <li>{t('contractor-rules.document3')}</li>
          <li>{t('contractor-rules.document4')}</li>
          <li>{t('contractor-rules.document5')}</li>
          <li>{t('contractor-rules.document6')}</li>
          <li>{t('contractor-rules.document7')}</li>
          <li>{t('contractor-rules.document8')}</li>
        </ol>
        <p>{t('contractor-rules.thankYou')}</p>
      </div>
    </section>
  );
};

export default ContractorRulesSection;
