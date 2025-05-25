import { Outlet } from 'react-router-dom';
import PageNavigation from 'components/common/PageNavigation';
import { catalogPageNavLinks } from 'data/catalogPageNavLinks';

const CatalogPage = () => {
  return (
    <div className="bg-bg-catalog bg-position-catalog flex flex-auto flex-col bg-contain bg-no-repeat">
      <PageNavigation
        links={catalogPageNavLinks}
        classNameList="flex flex-wrap  gap-4 justify-center items-center ml:flex-nowrap ml:justify-between"
        classNameItem="max-w-[230px]"
      />
      <Outlet />
    </div>
  );
};

export default CatalogPage;
