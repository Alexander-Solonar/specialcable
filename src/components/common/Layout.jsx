import { Suspense, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from 'context/Context';
import * as APIFirebase from 'services/APIFirebase';
import Header from './Header';
import Footer from './Footer';
import FeedBackForm from '../forms/FeedBackForm';

const Layout = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { setProductList } = useContext(Context);

  useEffect(() => {
    (async () => {
      try {
        setProductList(await APIFirebase.getProductList());
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    })();
  }, [setProductList]);

  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex flex-auto flex-col">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <FeedBackForm />
      <Footer />
    </div>
  );
};

export default Layout;
