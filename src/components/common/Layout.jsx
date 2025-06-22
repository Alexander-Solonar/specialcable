import { Suspense, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Context } from 'context/Context';
import * as APIFirebase from 'services/APIFirebase';
import Header from './Header';
import Footer from './Footer';
import FeedBackForm from '../forms/FeedBackForm';
import Loader from './Loader';

const Layout = () => {
  const { setProductList } = useContext(Context);
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setProductList(await APIFirebase.getProductList());
      } catch (error) {}
    })();
  }, [setProductList]);

  useEffect(() => {
    setShowLoader(true);

    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden">
      <Header />
      <main className="relative flex flex-auto flex-col">
        {showLoader && <Loader />}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <FeedBackForm />
      <Footer />
    </div>
  );
};

export default Layout;
