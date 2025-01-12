import { useEffect } from 'react';

export const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current === e.target) {
      callback();
    }
  };
  useEffect(() => {
    if (ref.current) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};
