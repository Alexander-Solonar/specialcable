import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { catalogPageNavLinks } from 'data/catalogPageNavLinks';
import PageNavigation from 'components/common/PageNavigation';

const CatalogPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-auto flex-col bg-bg-catalog bg-contain bg-position-catalog bg-no-repeat">
      <PageNavigation
        links={catalogPageNavLinks}
        classNameList="flex flex-wrap  gap-4 justify-center items-center ml:flex-nowrap ml:justify-between"
        classNameItem="max-w-[230px]"
      />
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CatalogPage;
