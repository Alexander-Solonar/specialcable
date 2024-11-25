import React, { useContext, useRef } from 'react';
import { Context } from '../context/Context';
import { useClickOutside } from '../hooks/useClickOutside';
import { useCloseOnResize } from '../hooks/useCloseOnResize';
import Navigation from './Navigation';
import SpriteIcon from './common/SpriteIcon';
import LangSwitcher from './buttons/LangSwitcher';

const MobileMenu = () => {
  const { menuOpen, setMenuOpen, setLangOpen } = useContext(Context);
  const menuRef = useRef(null);

  // Виклик хука для закриття меню при кліку за його межами
  useClickOutside(menuRef, () => {
    if (menuOpen) setMenuOpen(false);
  });

  // Виклик хука для закриття меню при зміні розміру екрана
  useCloseOnResize(menuOpen, () => setMenuOpen(false));

  const handleClickCloseMenu = () => {
    setMenuOpen(false);
    setLangOpen(false);
  };

  return (
    <>
      {/* Задній фон, який з'являється при відкритті меню */}
      <div
        ref={menuRef}
        className={`absolute z-[2] h-full w-full bg-backdrop ml:hidden ${
          menuOpen ? 'scale-1' : 'scale-0'
        }`}
        aria-hidden={!menuOpen}
      ></div>

      {/* Контейнер меню */}
      <div
        className={`absolute right-0 z-[2] h-full w-48 bg-white p-4 transition-transform duration-300 ease-in-out sm:w-72 sm:pr-10 sm:pt-6 ml:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-[100%]'
        }`}
      >
        <div className="flex justify-between">
          <LangSwitcher className="relative inline-block text-left" />

          {/* Кнопка закриття меню */}
          <button
            onClick={handleClickCloseMenu}
            className="group flex items-center justify-center transition-colors duration-300 ml:hidden xl:h-[55px] xl:min-w-[55px]"
          >
            <SpriteIcon
              icon="close"
              className="h-[24px] w-[24px] fill-deep-blue transition-colors duration-300 group-hover:fill-vivid-orange sm:h-[29px] sm:w-[29px]"
            />
          </button>
        </div>

        <Navigation
          classNameNav="flex justify-center mt-12"
          classNameList="flex flex-col gap-y-4"
        />
      </div>
    </>
  );
};

export default MobileMenu;
