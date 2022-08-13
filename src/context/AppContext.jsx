import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        isOpen,
        setIsOpen,
        isMobile,
        setIsMobile,
        isChecked,
        setIsChecked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
