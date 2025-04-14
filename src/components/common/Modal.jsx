import { useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const menuRef = useRef(null);

  // Виклик хука для закриття меню при кліку за його межами
  useClickOutside(menuRef, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
        isOpen
          ? 'opacity-1 pointer-events-auto'
          : 'pointer-events-none opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
