import { Link } from 'react-router-dom';

const CatalogCategorySection = ({ cableTitle, cableTypes }) => {
  return (
    <li className="w-[calc(50%-1rem)] ml:w-[calc(25%-1rem)]">
      <h2 className="mb-3 text-xs font-bold uppercase tracking-widest ml:text-sm">
        {cableTitle}
      </h2>
      <ul>
        {cableTypes.map(element => (
          <li key={element} className="text-xs sm:text-base">
            <Link to={element}>{element}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CatalogCategorySection;
