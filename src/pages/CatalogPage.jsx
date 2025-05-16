import { Outlet } from 'react-router-dom';
import Container from 'components/common/Container';
import PageNavigation from 'components/common/PageNavigation';
import { catalogPageNavLinks } from 'data/catalogPageNavLinks';

const CatalogPage = () => {
  return (
    <div>
      <Container>
        <PageNavigation
          links={catalogPageNavLinks}
          classNameList="flex flex-wrap  gap-4 justify-center items-center ml:flex-nowrap ml:justify-between"
          classNameItem="max-w-[230px]"
        />
        <Outlet />
      </Container>
    </div>
  );
};

export default CatalogPage;
