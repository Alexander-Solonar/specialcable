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

  return (
    <Context.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isLangOpen,
        setIsLangOpen,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
