import sprite from 'assets/images/sprite.svg';
import PropTypes from 'prop-types';

const SpriteIcon = props => {
  const { icon, ...rest } = props;

  return (
    <svg {...rest} fill="currentColor">
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  );
};

export default SpriteIcon;

SpriteIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};
