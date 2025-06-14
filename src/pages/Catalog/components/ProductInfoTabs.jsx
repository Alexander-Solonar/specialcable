import { useTranslation } from 'react-i18next';

const ProductInfoTabs = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();

  const tabs = [
    { key: 'specs', label: 'productInfoPage.characteristics' },
    { key: 'size', label: 'productInfoPage.macrosizes' },
  ];

  return (
    <div className="mb-8 flex items-center justify-between gap-4 text-center text-sm font-bold tracking-widest sm:justify-around ml:mb-11 ml:w-[calc(60%-1rem)]">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`h-8 w-[calc(50%-1rem)] p-2 text-center uppercase transition-colors duration-300 sm:w-[calc(40%-2rem)] ${
            activeTab === key ? 'bg-vivid-orange text-white' : ''
          }`}
        >
          {t(`${label}`)}
        </button>
      ))}
    </div>
  );
};

export default ProductInfoTabs;
