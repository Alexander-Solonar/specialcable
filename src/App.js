import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';

import Layout from './components/common/Layout';
import HomePage from './pages/Home/HomePage';

const AboutCompanyPage = lazy(() => import('pages/About/AboutCompanyPage'));
const AboutUsPage = lazy(() => import('pages/About/AboutUsPage'));
const NewsPage = lazy(() => import('pages/About/NewsPage'));
const GalleryPage = lazy(() => import('pages/About/GalleryPage'));
const VacanciesPage = lazy(() => import('pages/About/VacanciesPage'));
const ArticlesPage = lazy(() => import('pages/About/ArticlesPage'));
const ArticleDetailsPage = lazy(() => import('pages/About/ArticleDetailsPage'));
const PartnersPage = lazy(() => import('pages/About/PartnersPage'));

const CatalogPage = lazy(() => import('pages/Catalog/CatalogPage'));
const ContentCatalogPage = lazy(() => import('pages/Catalog/ContentCatalogPage'));
const ProductInfoPage = lazy(() => import('./pages/Catalog/ProductInfoPage'));

const InformationPage = lazy(() => import('pages/Information/InformationPage'));
const ContractorRulesPage = lazy(() => import('pages/Information/ContractorRulesPage'));
const PaymentRulesPage = lazy(() => import('pages/Information/PaymentRulesPage'));
const StorageRulesPage = lazy(() => import('pages/Information/StorageRulesPage'));
const SupplierInfoPage = lazy(() => import('pages/Information/SupplierInfoPage'));
const CertificatesPage = lazy(() => import('pages/Information/CertificatesPage'));

const ContactsPage = lazy(() => import('./pages/Contacts/ContactsPage'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* About */}
          <Route path="/about-us" element={<AboutCompanyPage />}>
            <Route index element={<Navigate to="us" replace />} />
            <Route path="us" element={<AboutUsPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="vacancies" element={<VacanciesPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="articles/article/:articleId" element={<ArticleDetailsPage />} />
            <Route path="partners" element={<PartnersPage />} />
          </Route>

          {/* Catalog */}
          <Route path="/catalog" element={<CatalogPage />}>
            <Route index element={<Navigate to="sec-fire-cables" replace />} />
            <Route path=":catalogId" element={<ContentCatalogPage />} />
          </Route>
          <Route path="/catalog/:catalogId/:productId" element={<ProductInfoPage />} />

          {/* Information */}
          <Route path="/information" element={<InformationPage />}>
            <Route index element={<Navigate to="contractor-rules" replace />} />
            <Route path="contractor-rules" element={<ContractorRulesPage />} />
            <Route path="payment-rules" element={<PaymentRulesPage />} />
            <Route path="storage-rules" element={<StorageRulesPage />} />
            <Route path="supplier-info" element={<SupplierInfoPage />} />
            <Route path="certificates" element={<CertificatesPage />} />
          </Route>

          {/* Contacts */}
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
