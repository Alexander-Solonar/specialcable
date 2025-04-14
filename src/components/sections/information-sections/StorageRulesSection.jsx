import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'components/common/SectionTitle';

const StorageRulesSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <SectionTitle text={t('storage-rules.title')} />
      <ul className="mt-8 flex max-w-[700px] flex-col gap-8 text-sm ml:text-base">
        <li>{t('storage-rules.paragraph1')}</li>
        <li>{t('storage-rules.paragraph2')}</li>
        <li>{t('storage-rules.paragraph3')}</li>
        <li>{t('storage-rules.paragraph4')}</li>
      </ul>
    </section>
  );
};

export default StorageRulesSection;
