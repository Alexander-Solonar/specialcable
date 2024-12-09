import throttle from 'lodash.throttle';
import { useEffect } from 'react';

export const useCloseOnResize = (setIsOpen, breakpoint = 768) => {
  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth > breakpoint) {
        setIsOpen(false);
      }
    }, 250);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsOpen, breakpoint]);
};
