import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';
import { ReactComponent as LogoIconSmall } from 'assets/images/logoSmall.svg';
import Container from './Container';
import Navigation from './Navigation';
import MobileMenu from '../utils/MobileMenu';
import LangSwitcher from '../buttons/LangSwitcher';
import BurgerMenu from '../buttons/BurgerMenu';

const Header = () => {
  return (
    <>
      <header className="relative pb-7 pt-7">
        <Container>
          <div className="flex w-full items-center justify-between">
            <Link to="/">
              {/* Лого для великих екранів */}
              <LogoIcon className="hidden h-[80px] w-[180px] flex-shrink-0 ml:inline-block" />

              {/* Лого для маленьких екранів */}
              <LogoIconSmall className="h-[32px] w-[72px] flex-shrink-0 ml:hidden" />
            </Link>

            <a className="ml-7 mr-7 flex-shrink-0" href="tel:+380963506413">
              <span className="font-main text-lg font-bold xl:text-sm">
                8 <span className="text-vivid-orange"> 096</span> 350 64 13
              </span>
            </a>

            <Navigation
              classNameNav="mr-2 w-full hidden max-w-[450px] xl:max-w-[580px] xl:flex"
              classNameList="w-full justify-between gap-x-[8px] ml:flex"
            />
            <LangSwitcher className="relative hidden text-left xl:inline-block" />
            <BurgerMenu />
          </div>
        </Container>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
