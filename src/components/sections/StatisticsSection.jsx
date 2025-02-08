import { useTranslation } from 'react-i18next';
import { statisticsData } from '../../data/companyStatistics';

import Container from '../common/Container';
import AnimatedNumber from '../utils/AnimatedNumber';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatisticsSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.9, once: true });

  return (
    <section ref={sectionRef} className="bg-space-blue py-10 sm:py-11 ml:py-28">
      <Container>
        <motion.ul className="flex flex-wrap justify-center gap-10 ml:justify-between ml:gap-0">
          {statisticsData.map(({ id, amount, text }) => (
            <li key={id} className="flex w-36 flex-col items-center gap-y-2 ml:w-40">
              <p className="text-lg tracking-[0.27em] text-vivid-orange sm:text-4xl">
                {isInView ? <AnimatedNumber targetNumber={amount} duration={2000} /> : '0'}
              </p>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-white ml:text-sm">
                {t(text)}
              </p>
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
};

export default StatisticsSection;
