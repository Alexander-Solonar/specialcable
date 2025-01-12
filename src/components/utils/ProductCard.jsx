import { Link } from 'react-router-dom';

import cableXl from '../../assets/images/cableXl.webp';
import cableMl from '../../assets/images/cableMl.webp';
import cableSm from '../../assets/images/cableSm.webp';

const ProductCard = () => {
  return (
    <li className="relative w-[152px] ml:w-[160px] xl:w-[280px]">
      <Link className="inline-block shadow-custom transition-transform duration-300 hover:scale-110">
        <picture>
          <source media="(max-width: 480px)" srcSet={cableSm} />
          <source media="(max-width: 768px)" srcSet={cableMl} />
          <img src={cableXl} alt="cable" loading="lazy" />
        </picture>
      </Link>
      <p className="pointer-events-none mt-3 text-[10px] font-bold uppercase leading-[1.3] tracking-[0.20em] ml:text-xs xl:absolute xl:bottom-8 xl:left-5 xl:right-8 xl:h-16 xl:text-sm">
        Кабели для систем охранно - пожарной сигнализации
      </p>
    </li>
  );
};

export default ProductCard;
