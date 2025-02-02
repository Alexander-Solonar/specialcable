import { useTranslation } from 'react-i18next';

const FooterBlock = ({ title, items }) => {
  const { t } = useTranslation();
  return (
    <div className="border-b-[1px] border-soft-blue border-opacity-10 pb-4 ml:w-1/4 ml:border-none">
      <h3 className="mb-4 text-xs font-bold uppercase sm:tracking-widest ml:text-base">
        {t(title)}
      </h3>
      <ul className="flex gap-x-4 gap-y-4 text-[11px] leading-4 sm:uppercase sm:tracking-widest ml:flex-col ml:text-base ml:normal-case ml:tracking-normal">
        {items.map((column, index) => (
          <li key={index} className="flex w-1/2 flex-col gap-y-3 ml:w-full">
            {column.map((link, idx) => (
              <a
                key={idx}
                className="w-fit transition-colors duration-300 hover:text-vivid-orange"
                href={link.href}
              >
                {t(link.text)}
              </a>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBlock;
