import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from '../context/Context';
import * as APIFirebase from '../services/APIFirebase';
import Container from '../components/common/Container';
import AboutNav from '../components/utils/AboutNav';

const AboutCompanyPage = () => {
  const { setArticleList } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(isLoading, error);

  useEffect(() => {
    (async () => {
      try {
        setArticleList(await APIFirebase.getArticleList());
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [setArticleList]);

  // if (isLoading) {
  //   return (
  //     <div className="h-full">
  //       <Container>
  //         <p>Загрузка...</p>
  //       </Container>
  //     </div>
  //   );
  // }

  return (
    <div className="h-full">
      <Container>
        <AboutNav />
      </Container>
      <Outlet />
    </div>
  );
};

export default AboutCompanyPage;
