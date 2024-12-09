import Container from '../components/common/Container';
import image from '../assets/images/image 68.webp';

const Slide = ({ bgColor }) => {
  return (
    <div className={`overflow-x-hidden bg-${bgColor}`}>
      <Container>
        <div className="max-w-44 pb-10 pt-10 sm:max-w-60 sm:pb-[90px] sm:pt-20 ml:max-w-[500px] ml:pb-28 ml:pt-32">
          <p className="absolute left-0 top-1.5 bg-midnight-blue px-3 text-xs font-bold uppercase leading-[1.5] tracking-widest text-white sm:left-4 sm:top-10 ml:top-8">
            Специальное предложение
          </p>
          <h2 className="text-sm uppercase leading-tight tracking-[0.2em] text-white sm:text-2xl ml:text-6xl">
            Распродажа складских остатков
          </h2>
          <p className="mt-3 text-xs text-white sm:mt-5 sm:text-base ml:mt-10 ml:text-3xl ml:uppercase ml:tracking-[0.27em]">
            КВК-В-2 2×0.75 кабель разномеры от 13 р/м вместо 14 р/м
          </p>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 sm:-right-16 sm:pl-[280px] ml:-right-64 ml:pl-[470px]">
          <img src={image} alt="" className="w-[152px] sm:w-[376px] ml:w-[770px]" />
          {/* <picture>
            <source media="(max-width: 480px)" srcSet={cableSm} />
            <source media="(max-width: 768px)" srcSet={cableMl} />
            <img src={cableXl} alt="cable" loading="lazy" />
          </picture> */}
        </div>
      </Container>
    </div>
  );
};

export default Slide;
