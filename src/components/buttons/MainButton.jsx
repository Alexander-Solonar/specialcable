import { Link } from 'react-router-dom';

const MainButton = ({ text, ariaLabel = null, addStyles = '' }) => {
  return (
    <Link
      className={`flex h-12 w-36 items-center justify-center bg-vivid-orange text-sm font-bold text-white transition-opacity duration-300 hover:opacity-85 sm:w-60 sm:text-lg ml:h-16 ml:w-72 ${addStyles}`}
      aria-label={ariaLabel}
    >
      {text}
    </Link>
  );
};

export default MainButton;
