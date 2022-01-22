import React, { createContext, useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
      const newItem = { ...payload.item, cartId: uuidv4() };

      return [ ...cart, newItem ];

    case ACTIONS.REMOVE_ITEM:
      return cart.filter(item => item.cartId !== payload.id);

    case ACTIONS.REMOVE_ALL:
      return [];
  
    default:
      return cart;
  }
};

export function AppContextProvider({ children }) {
  const [ cart, dispatchCart ] = useReducer(cartReducer, []);
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };

  const handleAddItem = ({ id, title, price }) => {
    dispatchCart({
      type: ACTIONS.ADD_ITEM,
      payload: {
        item: { id, title, price }
      }
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
