import React, { createContext, useState } from 'react';

const AppContext = createContext({ cart: [], onToggleModal: () => {} });

AppContext.displayName = 'AppContext';

export function AppContextProvider({ children }) {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };

  return (
    <AppContext.Provider value={ { cart: [], isModalVisible, onToggleModal: handleToggleModal } }>{ children }</AppContext.Provider>
  );
}

export default AppContext;
