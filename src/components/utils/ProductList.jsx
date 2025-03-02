import PropTypes from 'prop-types';
import ProductCard from '../utils/ProductCard';

const ProductList = ({ products }) => {
  return (
    <ul className="mx-auto mb-12 mt-12 grid w-fit grid-cols-2 justify-items-center gap-5 sm:mt-10 ml:grid-cols-4">
      {products.map(({ id, ...product }) => (
        <ProductCard key={id} {...product} />
      ))}
    </ul>
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
