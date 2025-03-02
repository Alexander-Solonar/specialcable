import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/Context';

import Modal from '../common/Modal';
import SpriteIcon from '../common/SpriteIcon';

const FullScreenLetter = ({ image }) => {
  const { isModalOpen, setIsModalOpen } = useContext(Context);

  if (!image) {
    return null;
  }

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div className="relative scale-100 transform transition-transform duration-300">
        {/* Контент модалки */}
        <img src={image} className="max-h-screen w-auto" alt="document" />

        {/* Кнопка закрытия */}
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="group absolute right-5 top-5 flex items-center justify-center transition-colors duration-300"
          aria-label="Close"
        >
          <SpriteIcon
            icon="close"
            className="h-6 w-6 fill-gray transition-colors duration-300 group-hover:fill-vivid-orange"
          />
        </button>
      </div>
    </Modal>
  );
};

export default FullScreenLetter;

FullScreenLetter.propTypes = {
  image: PropTypes.string,
};
