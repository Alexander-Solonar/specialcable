import { Link } from 'react-router-dom';

const PageLinkButton = ({ path = '', text, ariaLabel = null, addStyles = '' }) => {
  return (
    <Link
      to={path}
      className={`bg-vivid-orange px-4 py-1 text-xs font-bold text-white transition-opacity duration-300 hover:opacity-85 sm:px-14 sm:py-3 sm:text-base lg:px-20 lg:py-5 lg:text-lg ${addStyles}`}
      aria-label={ariaLabel}
    >
      {text}
    </Link>
  );
};

export default PageLinkButton;
