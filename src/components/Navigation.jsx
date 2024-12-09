import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { nameNav } from '../data/nameNav';

const Navigation = ({ classNameNav, classNameList }) => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }) =>
    `border-b-2 ${
      isActive ? 'border-b-midnight-blue' : 'border-b-transparent'
    } uppercase font-bold text-sm tracking-[0.12rem] transition-colors duration-300 hover:border-b-midnight-blue`;

  return (
    <nav aria-label="Main Navigation" className={classNameNav}>
      <ul className={classNameList}>
        {nameNav.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink to={path} className={linkClassName}>
              {t(text)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
