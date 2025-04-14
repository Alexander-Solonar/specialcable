import { lazy } from 'react';

// About sections
export const AboutUsDetailsSection = lazy(
  () => import('./about-sections/AboutUsDetailsSection')
);
export const NewsSection = lazy(() => import('./about-sections/NewsSection'));
export const VacanciesSection = lazy(
  () => import('./about-sections/VacanciesSection')
);
export const ArticlesSection = lazy(
  () => import('./about-sections/ArticlesSection')
);
export const GallerySection = lazy(
  () => import('./about-sections/GallerySection')
);
export const PartnersSection = lazy(
  () => import('./about-sections/PartnersSection')
);
export const ArticleDetailsSection = lazy(
  () => import('./about-sections/ArticleDetailsSection')
);

// Information sections
export const ContractorRulesSection = lazy(
  () => import('./information-sections/ContractorRulesSection')
);
export const PaymentRulesSection = lazy(
  () => import('./information-sections/PaymentRulesSection')
);
export const StorageRulesSection = lazy(
  () => import('./information-sections/StorageRulesSection')
);
export const SupplierInfoSection = lazy(
  () => import('./information-sections/SupplierInfoSection')
);
export const CertificatesSection = lazy(
  () => import('./information-sections/CertificatesSection')
);
