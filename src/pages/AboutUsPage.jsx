import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Container from '../components/common/Container';

const AboutUsPage = () => {
  const linkClassName = ({ isActive }) =>
    `flex justify-center items-center h-[30px] transition-colors duration-300 hover:bg-vivid-orange hover:text-white ${
      isActive && 'bg-vivid-orange text-white'
    } `;

  return (
    <div>
      <Container>
        <nav className="pb-12 pt-10 text-sm font-bold uppercase tracking-widest">
          <ul className="grid grid-cols-3 gap-4 text-center sm:grid-cols-6">
            <li>
              <NavLink to="us" className={linkClassName}>
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink to="news" className={linkClassName}>
                Новини
              </NavLink>
            </li>
            <li>
              <NavLink to="gallery" className={linkClassName}>
                Галерея
              </NavLink>
            </li>
            <li>
              <NavLink to="jobs" className={linkClassName}>
                Вакансії
              </NavLink>
            </li>
            <li>
              <NavLink to="articles" className={linkClassName}>
                Статті
              </NavLink>
            </li>
            <li>
              <NavLink to="partners" className={linkClassName}>
                Партнери
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </Container>
    </div>
  );
};

export default AboutUsPage;
