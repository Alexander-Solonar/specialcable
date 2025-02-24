import { Link } from 'react-router-dom';

const ProductCard = ({ imageSm, imageMl, imageXl, text }) => {
  return (
    <li className="relative flex w-[152px] flex-col ml:w-[160px] xl:w-[280px]">
      <Link className="inline-block shadow-custom transition-transform duration-300 hover:scale-105">
        <picture>
          <source media="(max-width: 480px)" srcSet={imageSm} />
          <source media="(max-width: 768px)" srcSet={imageMl} />
          <img
            className="h-[184px] ml:h-[231px] xl:h-[400px]"
            src={imageXl}
            alt="cable"
            loading="lazy"
          />
        </picture>
      </Link>
      <p className="pointer-events-none mt-3 text-[10px] font-bold uppercase leading-[1.3] tracking-[0.20em] ml:text-xs xl:absolute xl:bottom-8 xl:left-5 xl:right-8 xl:h-16 xl:text-sm">
        {text}
      </p>
    </li>
  );
};

export default ProductCard;
