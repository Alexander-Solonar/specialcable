import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useCloseOnResize } from '../../hooks/useCloseOnResize';

import Navigation from '../common/Navigation';
import Modal from '../common/Modal';
import SpriteIcon from '../common/SpriteIcon';
import LangSwitcher from '../buttons/LangSwitcher';

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen, setIsLangOpen } = useContext(Context);

  // Виклик хука для закриття меню при зміні розміру екрана
  useCloseOnResize(setIsMenuOpen);

  const handleClose = () => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
  };

  return (
    <Modal isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
      <div
        className={`absolute right-0 z-[2] h-full w-48 bg-white p-4 transition-transform duration-300 ease-in-out sm:w-72 sm:pr-10 sm:pt-6 xl:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between">
          <LangSwitcher className="relative" />

          {/* Кнопка закриття меню */}
          <button
            onClick={handleClose}
            className="group flex items-center justify-center xl:h-[55px] xl:min-w-[55px]"
            aria-label="Close menu"
          >
            <SpriteIcon
              icon="close"
              className="h-5 w-5 fill-deep-blue transition-colors duration-300 group-hover:fill-vivid-orange"
            />
          </button>
        </div>

        <Navigation
          closeMobileMenu={setIsMenuOpen}
          classNameNav="flex justify-center mt-12"
          classNameList="flex flex-col gap-y-4"
        />
      </div>
    </Modal>
  );
};

export default MobileMenu;
