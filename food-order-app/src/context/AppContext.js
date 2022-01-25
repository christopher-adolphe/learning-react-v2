import React, { createContext, useState, useReducer } from 'react';

const AppContext = createContext({
  cart: [],
  onToggleModal: () => {},
  onAddItem: () => {},
  onRemoveItem: () => {},
  onRemoveAll: () => {}
});

AppContext.displayName = 'AppContext';

const initialCarState = JSON.parse(localStorage.getItem('cart')) || [];

const ACTIONS = {
  ADD_ITEM: 'ADD-ITEM',
  REMOVE_ITEM: 'REMOVE-ITEM',
  REMOVE_ALL: 'REMOVE-ALL'
};

const cartReducer = (cart, action) => {
  const { type, payload } = action;
  let updatedCart;
  let itemIndex;
  let cartItem;

  switch (type) {
    case ACTIONS.ADD_ITEM:
      itemIndex = cart.findIndex(item => item.id === payload.item.id);
      cartItem = cart[itemIndex];

      if (cartItem) {
        const updatedCartItem = { ...cartItem, amount: cartItem.amount + 1 };

        updatedCart = [ ...cart ];
        updatedCart[itemIndex] = { ...updatedCartItem };
      } else {
        updatedCart = [ ...cart, { ...payload.item } ];
      }
      
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart;

    case ACTIONS.REMOVE_ITEM:
      itemIndex = cart.findIndex(item => item.id === payload.id);
      cartItem = cart[itemIndex];

      if (cartItem.amount === 1) {
        updatedCart = cart.filter(item => item.id !== payload.id);
      } else {
        const updatedCartItem = { ...cartItem, amount: cartItem.amount - 1 };

        updatedCart = [ ...cart ];
        updatedCart[itemIndex] = { ...updatedCartItem };
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart;

    case ACTIONS.REMOVE_ALL:
      localStorage.removeItem('cart');

      return [];
  
    default:
      return cart;
  }
};

export function AppContextProvider({ children }) {
  const [ cart, dispatchCart ] = useReducer(cartReducer, initialCarState);
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };

  const handleAddItem = (item) => {
    dispatchCart({
      type: ACTIONS.ADD_ITEM,
      payload: { item }
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
