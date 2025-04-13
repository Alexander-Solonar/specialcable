import { Outlet } from 'react-router-dom';
import { informationPageNavLinks } from '../data/informationPageNavLinks';
import Container from '../components/common/Container';
import PageNavigation from '../components/common/PageNavigation';
import BackgroundWrapper from '../components/utils/BackgroundWrapper';

const InformationPage = () => {
  return (
    <div className="flex flex-auto flex-col">
      <Container>
        <PageNavigation
          links={informationPageNavLinks}
          classNameList="flex flex-wrap  gap-4 justify-center ml:flex-nowrap ml:justify-between"
        />
        <BackgroundWrapper>
          <Outlet />
        </BackgroundWrapper>
      </Container>
    </div>
  );
};

export default InformationPage;
