import { useTranslation } from 'react-i18next';
import { footerNavLinks } from 'data/footerNavLinks';
import Container from './Container';
import FooterBlock from '../common/FooterBlock';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex justify-center border-t-4 border-t-vivid-red bg-space-blue text-white">
      <div className="bg-left w-full max-w-[1600px] bg-no-repeat pb-4 pt-10 sm:bg-bg-footer ml:pb-20 ml:pt-14">
        <Container>
          <div className="flex flex-col gap-x-9 gap-y-4 ml:flex-row">
            {footerNavLinks.map((section, index) => (
              <FooterBlock key={index} title={section.title} items={section.items} />
            ))}
          </div>
          <div className="mt-8 flex justify-center ml:mt-16 ml:justify-end">
            <a
              className="text-[11px] underline opacity-50 sm:uppercase sm:tracking-widest sm:opacity-100 ml:max-w-[250px] ml:text-base ml:normal-case ml:tracking-normal"
              href="##"
            >
              {t('footer.privacyPolicy')}
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
