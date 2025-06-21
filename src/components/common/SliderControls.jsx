import SpriteIcon from '../common/SpriteIcon';
import PropTypes from 'prop-types';

const SliderControls = ({ color = 'white', addStyle }) => {
  return (
    <div className={addStyle}>
      <button className="custom-prev" aria-label="Previous slide">
        <SpriteIcon
          icon={'icon-prev'}
          width={6.4}
          height={16}
          className={`fill-${color}`}
        />
      </button>
      <div className="custom-pagination flex w-auto gap-x-1 sm:gap-x-2"></div>
      <button className="custom-next">
        <SpriteIcon
          icon={'icon-next'}
          width={6.4}
          height={16}
          className={`fill-${color}`}
        />
      </button>
    </div>
  );
};

export default SliderControls;

SliderControls.propTypes = {
  color: PropTypes.string,
  addStyle: PropTypes.string.isRequired,
};
