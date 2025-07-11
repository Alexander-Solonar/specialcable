import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Context } from 'context/Context';
import { certificates } from 'data/certificates.js';
import InfoPageBackground from './components/InfoPageBackground';
import Container from 'components/common/Container';
import SectionTitle from 'components/common/SectionTitle';
import FullScreenLetter from 'components/common/FullScreenLetter';

const CertificatesPage = () => {
  const { isModalOpen, setIsModalOpen } = useContext(Context);
  const { certificateId } = useParams();
  const [selectedId, setSelectedId] = useState(Number(certificateId) || 1);
  const [certificate, setCertificate] = useState(certificates[0]);
  const [modalImage, setModalImage] = useState(null);
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCertificateSelect = id => {
    setSelectedId(id);
    setCertificate(certificates.find(certificate => certificate.id === id));
  };

  const handleImageClick = imageSrc => {
    setModalImage(imageSrc);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="flex flex-auto">
      <InfoPageBackground>
        <Container>
          <SectionTitle title={t('certificatesSection.title')} />
          <div className="mt-3 flex items-start justify-center gap-x-20 sm:mt-7 ml:justify-start xl:gap-x-32">
            <div className="flex flex-col gap-7 ml:flex-row">
              {certificate.picture.map((element, index) => (
                <div key={index} className="shadow-custom">
                  <img
                    onClick={() => handleImageClick(element)}
                    src={element}
                    alt="certificate"
                    className="h-fit cursor-pointer"
                    width={380}
                  />
                </div>
              ))}
            </div>
            <ul className="flex flex-col gap-y-4 text-sm font-bold tracking-widest">
              {certificates.map(({ id, name }) => (
                <li key={id}>
                  <button
                    onClick={() => handleCertificateSelect(id)}
                    className={`hover:underline ${
                      selectedId === id ? 'underline' : 'no-underline'
                    }`}
                  >
                    {name[lng]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </InfoPageBackground>
      <FullScreenLetter image={modalImage} />
    </section>
  );
};

export default CertificatesPage;
