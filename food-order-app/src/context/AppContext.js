import React, { createContext, useState, useReducer } from 'react';

const AppContext = createContext({
  cart: [],
  onToggleModal: () => {},
  onAddItem: () => {},
  onRemoveItem: () => {},
  onRemoveAll: () => {}
});

AppContext.displayName = 'AppContext';

const ACTIONS = {
  ADD_ITEM: 'ADD-ITEM',
  REMOVE_ITEM: 'REMOVE-ITEM',
  REMOVE_ALL: 'REMOVE-ALL'
};

const cartReducer = (cart, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_ITEM:
      localStorage.setItem('cart', JSON.stringify([ ...cart, ...payload.items ]));

      return [ ...cart, ...payload.items ];

    case ACTIONS.REMOVE_ITEM:
      const itemIndex = cart.findIndex(item => item.id === payload.id);

      cart.splice(itemIndex, 1);

      localStorage.setItem('cart', JSON.stringify(cart));

      return [ ...cart ];

    case ACTIONS.REMOVE_ALL:
      localStorage.removeItem('cart');

      return [];
  
    default:
      return cart;
  }
};

export function AppContextProvider({ children }) {
  const [ cart, dispatchCart ] = useReducer(cartReducer, JSON.parse(localStorage.getItem('cart')) || []);
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };

  const handleAddItem = (items) => {
    dispatchCart({
      type: ACTIONS.ADD_ITEM,
      payload: { items }
    });
  };

  const handleRemoveItem = (id) => {
    dispatchCart({
      type: ACTIONS.REMOVE_ITEM,
      payload: { id }
    });
  };

  const handleRemoveAll = () => {
    dispatchCart({ type: ACTIONS.REMOVE_ALL })
  };

  return (
    <AppContext.Provider value={ {
      cart,
      isModalVisible,
      onToggleModal: handleToggleModal,
      onAddItem: handleAddItem,
      onRemoveItem: handleRemoveItem,
      onRemoveAll: handleRemoveAll } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppContext;
