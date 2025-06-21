import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="relative mx-auto w-full max-w-[1210px] px-[15px]">{children}</div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
