import { useTranslation } from 'react-i18next';

const ProductSize = ({ twinCore, fourCore }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between gap-4 text-center tracking-widest">
      <div className="w-[calc(50%-1rem)] text-center">
        <h2 className="mb-4 text-xs font-bold uppercase ml:mb-6 ml:text-sm">
          {t('productInfoPage.twinCore')}
        </h2>
        <ul className="flex flex-col gap-y-6 text-xs ml:text-base">
          {twinCore.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="w-[calc(50%-1rem)] text-center">
        <h2 className="mb-4 text-xs font-bold uppercase ml:mb-6 ml:text-sm">
          {t('productInfoPage.fourCore')}
        </h2>
        <ul className="flex flex-col gap-y-6 text-xs ml:text-base">
          {fourCore.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductSize;
