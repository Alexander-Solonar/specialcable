import React from 'react';
import FeedBackForm from '../forms/FeedBackForm';
import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';

const CallbackOrder = () => {
  return (
    <div className="bg-gray py-8 text-white sm:py-14 ml:py-24">
      <Container>
        <SectionTitle text="ЗАКАЗАТЬ ЗВОНОК" />
        <div className="mt-4 flex flex-col items-center sm:mt-7 ml:mt-12">
          <FeedBackForm />
          <p className="mt-4 text-xs sm:text-sm ml:text-base">
            Нажимая на кнопку «Заказать обратный звонок», я даю полное согласие на обработку
            персональных данных, а также подтверждаю, что ознакомлен с политикой конфиденциальности.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default CallbackOrder;
