import Container from './Container';
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className="border-t-4 border-t-vivid-red bg-deep-blue text-white">
      <Container>
        <LogoIcon className="mb-8 h-[32px] w-[209px]" />
      </Container>
      <p className="text-center text-vivid-red ml:text-left">
        &copy; 2024 Commercial Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
