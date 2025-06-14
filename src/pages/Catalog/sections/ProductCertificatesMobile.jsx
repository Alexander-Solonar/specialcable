const ProductCertificatesMobile = ({ certificates }) => {
  return (
    <div className="flex justify-center ml:hidden">
      {certificates.map((certificate, index) => (
        <div key={index}>
          <img src={certificate} alt="certificate" />
        </div>
      ))}
    </div>
  );
};

export default ProductCertificatesMobile;
