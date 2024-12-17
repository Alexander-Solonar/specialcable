import { Link } from 'react-router-dom';

const MainButton = ({ text, ariaLabel = null, addStyles = '' }) => {
  return (
    <Link
      className={`inline-flex h-8 items-center justify-center bg-vivid-orange px-4 text-sm font-bold text-white transition-opacity duration-300 hover:opacity-85 sm:h-12 sm:px-14 sm:text-lg ml:h-14 ${addStyles}`}
      aria-label={ariaLabel}
    >
      {text}
    </Link>
  );
};

export default MainButton;
