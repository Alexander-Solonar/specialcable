import { useState, useEffect } from 'react';

const AnimatedNumber = ({ targetNumber, duration = 2000 }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const isArrow = targetNumber.includes('>');

  if (isArrow) {
    targetNumber = targetNumber.slice(1);
  }
  useEffect(() => {
    const stepTime = duration / targetNumber;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCurrentNumber(current);

      if (current >= targetNumber) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return (
    <span>
      {isArrow && '>'}
      {currentNumber}
    </span>
  );
};

export default AnimatedNumber;
