import { useParams } from 'react-router-dom';
import catalogImg from 'assets/images/catalog-img.webp';

const ProductHeaderSection = () => {
  const { productId } = useParams();

  return (
    <div className="mb-5 flex flex-col gap-y-3 ml:mb-20 ml:flex-row">
      <div className="overflow-x-hidden ml:w-[calc(50%-1rem)]">
        <h1 className="text-lg uppercase tracking-widest text-space-blue ml:text-4xl xl:text-7xl">
          {productId}
        </h1>
        <p className="text-xs tracking-widest text-gray">
          ТУ 3581-001-05619891-2017
        </p>
        <img className="-ml-[5em]" src={catalogImg} alt="cable" />
      </div>
      <p className="text-xs text-space-blue ml:w-[calc(50%-1rem)] ml:text-base">
        Кабели симметричные парной скрутки КПСВВ применяются для одиночной
        стационарной прокладки в системах охранно-пожарной сигнализации,
        системах контроля, связи, сбора и передачи данных, управления
        инженерными коммуникациями, при напряжении до 300 В переменного тока
        частотой 50 Гц.
      </p>
    </div>
  );
};

export default ProductHeaderSection;
