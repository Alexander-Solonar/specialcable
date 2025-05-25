import Container from 'components/common/Container';
import { useTranslation } from 'react-i18next';

const ContactInfoMapSection = ({ address, mapSrc }) => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center gap-4 ml:flex-row ml:items-start ml:justify-between">
          <p className="text-sm font-bold uppercase tracking-widest ml:mt-6 ml:max-w-80">
            {t(address)}
          </p>

          <div className="aspect-[4/3] w-full sm:max-w-[580px]">
            <iframe
              className="h-full w-full"
              title={`map ${t(address)}`}
              src={t(mapSrc)}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactInfoMapSection;
