import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import FeedBackForm from '../forms/FeedBackForm';

const Layout = () => {
  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-auto">
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
