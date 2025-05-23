import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';

import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';

import {
  AboutUsDetailsSection,
  NewsSection,
  VacanciesSection,
  ArticlesSection,
  GallerySection,
  PartnersSection,
  ArticleDetailsSection,
  ContractorRulesSection,
  PaymentRulesSection,
  StorageRulesSection,
  SupplierInfoSection,
  CertificatesSection,
} from './components/sections';

const AboutCompanyPage = lazy(() => import('./pages/AboutCompanyPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const InformationPage = lazy(() => import('./pages/InformationPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* HomePage */}
          <Route index element={<HomePage />} />

          {/* AboutCompanyPage */}
          <Route path="/about-us" element={<AboutCompanyPage />}>
            <Route index element={<Navigate to="us" replace />} />
            <Route path="us" element={<AboutUsDetailsSection />} />
            <Route path="news" element={<NewsSection />} />
            <Route path="gallery" element={<GallerySection />} />
            <Route path="vacancies" element={<VacanciesSection />} />
            <Route path="articles" element={<ArticlesSection />} />
            <Route
              path="articles/article/:articleId"
              element={<ArticleDetailsSection />}
            />
            <Route path="partners" element={<PartnersSection />} />
          </Route>

          {/* CatalogPage */}
          <Route path="/catalog" element={<CatalogPage />}>
            <Route index element={<Navigate to="sec-fire-cables" replace />} />
            <Route path="sec-fire-cables" element={<h1>Hello</h1>} />
            <Route path="heating-cables" element={<h1>Hello1</h1>} />
            <Route path="telecom-wires" element={<h1>Hello2</h1>} />
            <Route path="cctv-cables" element={<h1>Hello3</h1>} />

            <Route
              path="articles/article/:articleId"
              element={<ArticleDetailsSection />}
            />
          </Route>

          {/* InformationPage */}
          <Route path="/information" element={<InformationPage />}>
            <Route index element={<Navigate to="contractor-rules" replace />} />
            <Route
              path="contractor-rules"
              element={<ContractorRulesSection />}
            />
            <Route path="payment-rules" element={<PaymentRulesSection />} />
            <Route path="storage-rules" element={<StorageRulesSection />} />
            <Route path="supplier-info" element={<SupplierInfoSection />} />
            <Route path="certificates" element={<CertificatesSection />} />
            <Route
              path="certificates/certificate/:certificateId"
              element={<ArticleDetailsSection />}
            />
          </Route>

          {/* ContactsPage */}
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
