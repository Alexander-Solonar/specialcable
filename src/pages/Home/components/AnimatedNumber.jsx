import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AnimatedNumber = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const isArrow = typeof targetNumber === 'string' && targetNumber.startsWith('>');
  const parsedNumber = parseInt(targetNumber.toString().replace('>', ''), 10) || 0;
  const duration = 2000;

  useEffect(() => {
    setCurrentNumber(0);
    if (parsedNumber <= 0) return;

    let startTime = performance.now();

    const updateNumber = timestamp => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCurrentNumber(Math.floor(progress * parsedNumber));

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    const animationFrame = requestAnimationFrame(updateNumber);
    return () => cancelAnimationFrame(animationFrame);
  }, [parsedNumber, duration]);

  return (
    <p className="text-lg tracking-[0.27em] text-vivid-orange sm:text-4xl">
      {isArrow && '>'}
      {currentNumber}
    </p>
  );
};

export default AnimatedNumber;

AnimatedNumber.propTypes = {
  targetNumber: PropTypes.string.isRequired,
};
