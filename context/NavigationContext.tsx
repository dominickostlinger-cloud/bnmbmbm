import React, { createContext, useState, useContext, ReactNode } from 'react';
import { PageView, NavigationParams, NavigationState, NavigationContextType } from '../types';

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    view: 'home',
    params: {},
  });

  const navigate = (view: PageView, params: NavigationParams = {}) => {
    setNavigationState({ view, params });
    window.scrollTo(0, 0); // Reset scroll position on navigation
  };

  return (
    <NavigationContext.Provider value={{ navigationState, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
