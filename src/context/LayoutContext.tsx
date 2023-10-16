import React, { createContext, useContext, useState, ReactNode } from 'react';

export type LayoutContextProps = {
  hideNavbar: boolean;
  setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);

  return (
    <LayoutContext.Provider value={{ hideNavbar, setHideNavbar }}>
      {children}
    </LayoutContext.Provider>
  );
};