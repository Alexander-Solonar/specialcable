import SpriteIcon from '../common/SpriteIcon';

const PromoSliderControls = () => {
  return (
    <div className="absolute bottom-2 left-1/2 z-10 flex w-full max-w-[1200px] -translate-x-1/2 justify-start gap-x-2 pl-4 text-xs text-white sm:bottom-11 sm:gap-x-4 sm:text-base ml:bottom-[54px]">
      <button className="custom-prev" aria-label="Previous slide">
        <SpriteIcon icon={'icon-prev'} width={6.4} height={16} className="fill-white" />
      </button>
      <div className="custom-pagination flex w-auto gap-x-1 sm:gap-x-2"></div>
      <button className="custom-next">
        <SpriteIcon icon={'icon-next'} width={6.4} height={16} className="fill-white" />
      </button>
    </div>
  );
};

export default PromoSliderControls;
