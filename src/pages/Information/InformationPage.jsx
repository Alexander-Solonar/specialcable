import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { informationPageNavLinks } from 'data/informationPageNavLinks';
import PageNavigation from 'components/common/PageNavigation';

const InformationPage = () => {
  return (
    <div className="flex flex-auto flex-col">
      <PageNavigation
        links={informationPageNavLinks}
        classNameList="flex flex-wrap  gap-4 justify-center ml:flex-nowrap ml:justify-between"
      />
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default InformationPage;
