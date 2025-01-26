import FooterBlock from '../utils/FooterBlock';
import Container from './Container';
import { footerNav } from '../../data/footerNav';

const Footer = () => {
  return (
    <footer className="flex justify-center border-t-4 border-t-vivid-red bg-space-blue text-white">
      <div className="sm:bg-bg-footer bg-left w-full max-w-[1600px] bg-no-repeat pb-4 pt-10 ml:pb-20 ml:pt-14">
        <Container>
          <div className="flex flex-col gap-x-9 gap-y-4 ml:flex-row">
            {footerNav.map((section, index) => (
              <FooterBlock key={index} title={section.title} items={section.items} />
            ))}
          </div>
          <div className="mt-8 flex justify-center ml:mt-16 ml:justify-end">
            <a
              className="text-[11px] underline opacity-50 sm:uppercase sm:tracking-widest sm:opacity-100 ml:max-w-[250px] ml:text-base ml:normal-case ml:tracking-normal"
              href="##"
            >
              Политика конфиденциальности и обработки персональных данных
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
