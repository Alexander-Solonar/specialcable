const ProductSize = () => {
  return (
    <div className="flex justify-between gap-4 text-center tracking-widest">
      <div className="w-[calc(50%-1rem)] text-center">
        <h2 className="mb-4 text-xs font-bold uppercase ml:mb-6 ml:text-sm">
          Двужильная скрутка
        </h2>
        <ul className="flex flex-col gap-y-6 text-xs ml:text-base">
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
        </ul>
      </div>
      <div className="w-[calc(50%-1rem)] text-center">
        <h2 className="mb-4 text-xs font-bold uppercase ml:mb-6 ml:text-sm">
          Четырехжильная скрутка
        </h2>
        <ul className="flex flex-col gap-y-6 text-xs ml:text-base">
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
          <li>КПСВВ 1х2х0,5</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSize;
