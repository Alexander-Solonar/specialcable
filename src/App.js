import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';

import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';

const AboutUs = lazy(() => import('./pages/AboutUsPage'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
