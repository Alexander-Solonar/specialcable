import { useContext } from 'react';
import { Context } from 'context/Context';
import SpriteIcon from '../common/SpriteIcon';

const BurgerMenu = () => {
  const { setIsMenuOpen } = useContext(Context);

  return (
    <button
      onClick={() => setIsMenuOpen(true)}
      className="group flex items-center justify-center rounded-2xl transition-colors duration-300 xl:hidden xl:h-[55px] xl:min-w-[55px]"
    >
      <SpriteIcon
        icon="burger-menu"
        className="h-[22px] w-[40px] fill-space-blue transition-colors duration-300 group-hover:fill-vivid-orange"
      />
    </button>
  );
};

export default BurgerMenu;
