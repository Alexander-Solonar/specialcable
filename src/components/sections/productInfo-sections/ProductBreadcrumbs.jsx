import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SpriteIcon from 'components/common/SpriteIcon';

const ProductBreadcrumbs = () => {
  const { catalogId } = useParams();
  return (
    <div className="mb-8 flex items-center gap-x-5 text-base text-soft-blue">
      <Link to="/catalog">Каталог</Link>
      <SpriteIcon
        icon="icon-next"
        className="h-[15px] w-[6px] fill-soft-blue transition-colors duration-300 group-hover:fill-vivid-orange"
      />
      <Link to={`/catalog/${catalogId}`}>
        Кабели для систем охранно - пожарной сигнализации
      </Link>
    </div>
  );
};

export default ProductBreadcrumbs;
