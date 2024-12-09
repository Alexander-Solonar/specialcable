import { useTranslation } from 'react-i18next';
import { data } from '../../data/companyStatistics';

import Container from '../common/Container';

const CompanyStatistics = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-space-blue py-10 sm:py-11 ml:py-28">
      <Container>
        <ul className="flex flex-wrap justify-center gap-10 ml:justify-between ml:gap-0">
          {data.map(({ id, amount, text }) => (
            <li key={id} className="flex w-36 flex-col items-center gap-y-2 ml:w-40">
              <p className="text-lg tracking-[0.27em] text-vivid-orange sm:text-4xl">{amount}</p>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-white ml:text-sm">
                {t(text)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default CompanyStatistics;
