import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';

const StorageRulesPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <Container>
        <SectionTitle text={t('storageRulesSection.title')} />
        <ul className="mt-8 flex max-w-[700px] flex-col gap-8 text-sm ml:text-base">
          <li>{t('storageRulesSection.paragraph1')}</li>
          <li>{t('storageRulesSection.paragraph2')}</li>
          <li>{t('storageRulesSection.paragraph3')}</li>
          <li>{t('storageRulesSection.paragraph4')}</li>
        </ul>
      </Container>
    </section>
  );
};

export default StorageRulesPage;
