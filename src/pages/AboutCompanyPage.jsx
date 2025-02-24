import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { aboutUsPageNavLinks } from '../data/aboutUsPageNavLinks';
import Container from '../components/common/Container';

const AboutCompanyPage = () => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }) =>
    `flex justify-center items-center h-[30px] transition-colors duration-300 hover:bg-vivid-orange hover:text-white ${
      isActive && 'bg-vivid-orange text-white'
    } `;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="h-full">
      <Container>
        <nav className="pb-12 pt-10 text-sm font-bold uppercase tracking-widest">
          <ul className="grid grid-cols-3 gap-4 text-center sm:grid-cols-6">
            {aboutUsPageNavLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path} className={linkClassName}>
                  {t(label)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </Container>
    </div>
  );
};

export default AboutCompanyPage;
