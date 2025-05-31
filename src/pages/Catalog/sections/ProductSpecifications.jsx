import React from 'react';

const ProductSpecifications = () => {
  return (
    <div>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest ml:mb-6 ml:text-sm">
        Условия эксплуатации:
      </h2>
      <ul className="mb-4 flex list-inside list-disc flex-col gap-y-6 text-xs ml:mb-6 ml:text-base">
        <li>
          Диапазон рабочих температур: -40…+70 °С; прокладки и монтажа: -10…+50
          °С.
        </li>
        <li>
          Радиус изгиба – не менее 10-кратного значения минимального наружного
          размера кабеля (7 радиусов – однократный изгиб при эксплуатации).
        </li>
        <li>
          Растягивающая нагрузка должна быть не более 50 Н/мм2 общего сечения
          токопроводящих жил кабеля.
        </li>
        <li>Минимальный срок службы - 15 лет.</li>
        <li>
          Применяются для прокладки внутри помещений и на открытом воздухе при
          условии защиты от воздействия солнечного излучения (категории 2-4 по
          ГОСТ 15150-69).
        </li>
        <li>
          Класс пожарной опасности (по ГОСТ Р 31565-2012): ПРГО 1– предел
          распространения горения при одиночной прокладке.
        </li>
      </ul>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest ml:mb-6 ml:text-sm">
        Конструкция:
      </h2>
      <ul className="mb-4 flex flex-col gap-y-6 text-xs ml:mb-6 ml:text-base">
        <li>Жилы: однопроволочные медные жилы</li>
        <li>Изоляция: ПВХ-пластикат</li>
        <li>Скрутка: попарно</li>
        <li>Минимальный срок службы - 15 лет.</li>
        <li>Оболочка: ПВХ-пластикат</li>
      </ul>
    </div>
  );
};

export default ProductSpecifications;
