import SpriteIcon from './SpriteIcon';

const Modal = ({ isOpen, setIsOpen, text }) => {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={toggleModal}
        >
          {/* Backdrop */}
          <div
            className="relative max-h-screen w-auto scale-100 transform overflow-y-auto rounded-md bg-white shadow-lg transition-transform duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Контент модалки */}
            <img src={text} className="max-h-full w-auto" alt="document" />

            {/* Кнопка закрытия */}
            <button
              onClick={toggleModal}
              className="group absolute right-10 top-10 flex items-center justify-center transition-colors duration-300"
            >
              <SpriteIcon
                icon="close"
                className="h-[24px] w-[24px] fill-gray transition-colors duration-300 group-hover:fill-vivid-orange"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
