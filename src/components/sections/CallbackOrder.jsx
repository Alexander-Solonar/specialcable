import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../common/Container';
import FeedBackForm from '../forms/FeedBackForm';
import SectionTitle from '../common/SectionTitle';

const CallbackOrder = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray py-8 text-white sm:py-14 ml:py-24">
      <Container>
        <SectionTitle text={t('feedBack.title')} />
        <div className="mt-4 flex flex-col items-center sm:mt-7 ml:mt-12">
          <FeedBackForm />
          <p className="mt-4 text-xs sm:text-sm ml:text-base">{t('feedBack.text')}</p>
        </div>
      </Container>
    </section>
  );
};

export default CallbackOrder;
