import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FooterBlock = ({ title, items }) => {
  const { t } = useTranslation();
  return (
    <div className="border-b border-soft-blue border-opacity-10 pb-4 ml:w-1/4 ml:border-none">
      <h3 className="mb-4 text-xs font-bold uppercase sm:tracking-widest ml:text-base">
        {t(title)}
      </h3>
      <ul className="flex gap-4 text-[11px] leading-4 sm:uppercase sm:tracking-widest ml:flex-col ml:text-base ml:normal-case ml:tracking-normal">
        {items.map((column, index) => (
          <li key={index} className="flex w-1/2 flex-col gap-y-3 ml:w-full">
            {column.map(({ href, label }, idx) => (
              <Link
                key={idx}
                className="w-fit transition-colors duration-300 hover:text-vivid-orange"
                to={href}
              >
                {t(label)}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBlock;

FooterBlock.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
};
