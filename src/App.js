import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';

import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';

const AboutCompanyPage = lazy(() => import('./pages/AboutCompanyPage'));
const AboutUsDetailsSection = lazy(
  () => import('./components/sections/about-sections/AboutUsDetailsSection')
);
const NewsSection = lazy(() => import('./components/sections/about-sections/NewsSection'));
const VacanciesSection = lazy(
  () => import('./components/sections/about-sections/VacanciesSection')
);
const ArticlesSection = lazy(() => import('./components/sections/about-sections/ArticlesSection'));
const GallerySection = lazy(() => import('./components/sections/about-sections/GallerySection'));
const PartnersSection = lazy(() => import('./components/sections/about-sections/PartnersSection'));
const ArticleDetailsSection = lazy(
  () => import('./components/sections/about-sections/ArticleDetailsSection')
);

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutCompanyPage />}>
            <Route index element={<Navigate to="us" replace />} />
            <Route path="us" element={<AboutUsDetailsSection />} />
            <Route path="news" element={<NewsSection />} />
            <Route path="gallery" element={<GallerySection />} />
            <Route path="vacancies" element={<VacanciesSection />} />
            <Route path="articles" element={<ArticlesSection />} />
            <Route path="articles/article/:articleId" element={<ArticleDetailsSection />} />
            <Route path="partners" element={<PartnersSection />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
