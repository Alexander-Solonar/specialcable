import { useTranslation } from 'react-i18next';
import { statisticsData } from '../../data/companyStatistics';
import AnimatedNumber from '../utils/AnimatedNumber';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const StatisticsList = ({ sectionRef }) => {
  const { t } = useTranslation();
  const isInView = useInView(sectionRef, { amount: 0.9, once: true });

  return (
    <motion.ul
      className="flex flex-wrap justify-center gap-10 ml:justify-between ml:gap-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {statisticsData.map(({ id, amount, text }) => (
        <motion.li
          key={id}
          className="flex w-36 flex-col items-center gap-y-2 ml:w-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 * id }}
        >
          {isInView ? <AnimatedNumber targetNumber={amount} /> : '0'}
          <p className="text-center text-xs font-bold uppercase tracking-widest text-white ml:text-sm">
            {t(text)}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StatisticsList;

StatisticsList.propTypes = {
  sectionRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};
