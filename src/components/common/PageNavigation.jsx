import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from './Container';
import PropTypes from 'prop-types';

const PageNavigation = ({ links, classNameList, classNameItem = '' }) => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }) =>
    `flex justify-center items-center p-1 transition-colors duration-300 hover:bg-vivid-orange hover:text-white ${
      isActive ? 'bg-vivid-orange text-white' : ''
    } `;

  return (
    <Container>
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
    </Container>
  );
};

export default PageNavigation;

PageNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  classNameList: PropTypes.string.isRequired,
  classNameItem: PropTypes.string,
};
