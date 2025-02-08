import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';

import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import AboutUsDetailsSection from './components/sections/AboutUsDetailsSection';

const AboutCompanyPage = lazy(() => import('./pages/AboutCompanyPage'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutCompanyPage />}>
            <Route index element={<Navigate to="us" replace />} />
            <Route path="us" element={<AboutUsDetailsSection />} />
            <Route path="news" element={<h2>Новини</h2>} />
            <Route path="gallery" element={<h2>Галерея</h2>} />
            <Route path="jobs" element={<h2>Вакансії</h2>} />
            <Route path="articles" element={<h2>Статті</h2>} />
            <Route path="partners" element={<h2>Партнери</h2>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
