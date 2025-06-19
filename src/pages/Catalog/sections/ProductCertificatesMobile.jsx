import { useContext } from 'react';
import { Context } from 'context/Context';

const ProductCertificatesMobile = ({ certificates, setModalImage }) => {
  const { isModalOpen, setIsModalOpen } = useContext(Context);

  const handleImageClick = imageSrc => {
    setModalImage(imageSrc);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap ml:hidden">
      {certificates.map((certificate, index) => (
        <div key={index}>
          <img
            className="cursor-pointer"
            src={certificate}
            alt="certificate"
            width={336}
            onClick={() => handleImageClick(certificate)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCertificatesMobile;
