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
      <SectionTitle text={t('contractorRulesSection.title')} />
      <div className="mt-8 flex max-w-[700px] flex-col gap-8 text-sm ml:text-base">
        <p>{t('contractorRulesSection.description')}</p>
        <ol className="list-inside list-decimal">
          <li>{t('contractorRulesSection.document1')}</li>
          <li>{t('contractorRulesSection.document2')}</li>
          <li>{t('contractorRulesSection.document3')}</li>
          <li>{t('contractorRulesSection.document4')}</li>
          <li>{t('contractorRulesSection.document5')}</li>
          <li>{t('contractorRulesSection.document6')}</li>
          <li>{t('contractorRulesSection.document7')}</li>
          <li>{t('contractorRulesSection.document8')}</li>
        </ol>
        <p>{t('contractorRulesSection.thankYou')}</p>
      </div>
    </section>
  );
};

export default ContractorRulesSection;
