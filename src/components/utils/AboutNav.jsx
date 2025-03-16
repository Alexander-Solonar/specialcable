import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { aboutUsPageNavLinks } from '../../data/aboutUsPageNavLinks';

const AboutNav = () => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }) =>
    `flex justify-center items-center h-[30px] transition-colors duration-300 hover:bg-vivid-orange hover:text-white ${
      isActive ? 'bg-vivid-orange text-white' : ''
    } `;

  return (
    <nav className="pb-12 pt-10 text-sm font-bold uppercase tracking-widest">
      <ul className="grid grid-cols-3 gap-4 text-center ml:grid-cols-6">
        {aboutUsPageNavLinks.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path} className={linkClassName}>
              {t(label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AboutNav;
