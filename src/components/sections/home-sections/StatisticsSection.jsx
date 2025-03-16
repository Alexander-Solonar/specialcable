import { useRef } from 'react';
import Container from '../../common/Container';
import StatisticsList from '../../utils/StatisticsList';

const StatisticsSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="bg-space-blue py-10 sm:py-11 ml:py-28">
      <Container>
        <StatisticsList sectionRef={sectionRef} />
      </Container>
    </section>
  );
};

export default StatisticsSection;
