import { createContext, useState } from "react";

const initialContext = {
  menuOpen: false,
  setMenuOpen: () => {},
  langOpen: false,
  setLangOpen: () => {},
};

export const Context = createContext(initialContext);

const ContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        menuOpen,
        setMenuOpen,
        langOpen,
        setLangOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
