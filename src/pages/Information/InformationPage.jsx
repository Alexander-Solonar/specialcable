import { Outlet } from 'react-router-dom';
import { informationPageNavLinks } from 'data/informationPageNavLinks';
import PageNavigation from 'components/common/PageNavigation';

const InformationPage = () => {
  return (
    <div className="flex flex-auto flex-col bg-bg-information bg-contain bg-position-information bg-no-repeat pb-44">
      <PageNavigation
        links={informationPageNavLinks}
        classNameList="flex flex-wrap  gap-4 justify-center ml:flex-nowrap ml:justify-between"
      />
      <Outlet />
    </div>
  );
};

export default InformationPage;
