import ProductCard from '../utils/ProductCard';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const ProductList = () => {
  const { productList } = useContext(Context);

  return (
    <ul className="mx-auto mb-12 mt-12 grid w-fit grid-cols-2 justify-items-center gap-5 sm:mt-10 ml:grid-cols-4">
      {productList.map(({ id, ...productItem }) => (
        <ProductCard key={id} {...productItem} />
      ))}
    </ul>
  );
};

export default ProductList;
