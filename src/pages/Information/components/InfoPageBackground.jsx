import PropTypes from 'prop-types';

const InfoPageBackground = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[1210px] flex-auto bg-bg-information bg-70 bg-position-information bg-no-repeat pb-44">
      {children}
    </div>
  );
};

export default InfoPageBackground;

InfoPageBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
