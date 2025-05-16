import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageNavigation = ({ links, classNameList, classNameItem = '' }) => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }) =>
    `flex justify-center items-center p-1 transition-colors duration-300 hover:bg-vivid-orange hover:text-white ${
      isActive ? 'bg-vivid-orange text-white' : ''
    } `;

  return (
    <nav className="pb-12 pt-10 text-sm font-bold uppercase tracking-widest">
      <ul className={classNameList}>
        {links.map(({ path, label }) => (
          <li key={path} className={`text-center ${classNameItem}`}>
            <NavLink to={path} className={linkClassName}>
              {t(label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNavigation;
