import React, { useContext } from 'react';
import { Context } from '../../context/Context';

import Modal from '../common/Modal';
import SpriteIcon from '../common/SpriteIcon';

const FullScreenLetter = ({ image }) => {
  const { isModalOpen, setIsModalOpen } = useContext(Context);

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div
        className={`${isModalOpen ? 'scale-1' : 'scale-0'} transform transition-transform duration-300`}
      >
        {/* Контент модалки */}
        <img src={image} className="max-h-screen w-auto" alt="document" />

        {/* Кнопка закрытия */}
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="group absolute right-5 top-5 flex items-center justify-center transition-colors duration-300"
        >
          <SpriteIcon
            icon="close"
            className="h-[24px] w-[24px] fill-gray transition-colors duration-300 group-hover:fill-vivid-orange"
          />
        </button>
      </div>
    </Modal>
  );
};

export default FullScreenLetter;
