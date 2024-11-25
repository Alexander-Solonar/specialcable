import React from 'react';
import sprite from '../../assets/images/sprite.svg';

const SpriteIcon = props => {
  const { icon, ...rest } = props;

  return (
    <svg {...rest}>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  );
};

export default SpriteIcon;
