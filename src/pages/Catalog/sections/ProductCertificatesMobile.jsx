import sertificate1 from 'assets/images/certificate_1.webp';
import sertificate2 from 'assets/images/certificate_2.webp';

const ProductCertificatesMobile = () => {
  return (
    <div className="flex justify-center ml:hidden">
      <div>
        <img src={sertificate1} alt="sertificate" />
      </div>
      <div>
        <img src={sertificate2} alt="sertificate" />
      </div>
    </div>
  );
};

export default ProductCertificatesMobile;
