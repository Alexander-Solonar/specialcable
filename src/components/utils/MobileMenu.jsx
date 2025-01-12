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

  const handleClickCloseMenu = () => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
  };

  return (
    <Modal isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
      <div
        className={`absolute right-0 z-[2] h-full w-48 bg-white p-4 transition-transform duration-300 ease-in-out sm:w-72 sm:pr-10 sm:pt-6 ml:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
        }`}
      >
        <div className="flex justify-between">
          <LangSwitcher className="relative inline-block text-left" />

          {/* Кнопка закриття меню */}
          <button
            onClick={handleClickCloseMenu}
            className="group flex items-center justify-center ml:hidden xl:h-[55px] xl:min-w-[55px]"
          >
            <SpriteIcon
              icon="close"
              className="h-[24px] w-[24px] fill-deep-blue transition-colors duration-300 group-hover:fill-vivid-orange sm:h-[29px] sm:w-[29px]"
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
