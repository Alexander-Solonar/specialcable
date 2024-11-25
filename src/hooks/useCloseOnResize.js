import { useEffect } from 'react';

export const useCloseOnResize = (isOpen, closeMenu, breakpoint = 768) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > breakpoint && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, closeMenu, breakpoint]);
};
