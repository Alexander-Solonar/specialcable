import { createContext, useState } from 'react';

const initialContext = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  isLangOpen: false,
  setIsLangOpen: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
};

export const Context = createContext(initialContext);

const ContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [articleList, setArticleList] = useState([]);

  return (
    <Context.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isLangOpen,
        setIsLangOpen,
        isModalOpen,
        setIsModalOpen,
        productList,
        setProductList,
        articleList,
        setArticleList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
