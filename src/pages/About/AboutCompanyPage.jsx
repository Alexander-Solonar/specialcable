import { Suspense, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from 'context/Context';
import { aboutUsPageNavLinks } from 'data/aboutUsPageNavLinks';
import * as APIFirebase from 'services/APIFirebase';
import PageNavigation from 'components/common/PageNavigation';

const AboutCompanyPage = () => {
  const { setArticleList } = useContext(Context);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setArticleList(await APIFirebase.getArticleList());
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    })();
  }, [setArticleList]);

  return (
    <div>
      <PageNavigation
        links={aboutUsPageNavLinks}
        classNameList="grid grid-cols-3 gap-4 text-center ml:grid-cols-6"
      />

      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AboutCompanyPage;
