// NavigationContext.js
import React, { createContext, useState } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
