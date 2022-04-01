import React, { createContext, useState } from 'react';

export const ProductsContext = createContext({
  products: [],
  onToggleFav: (id) => {}
});

ProductsContext.displayName = 'ProductsContext';

const defaultProducts = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false
  }
];

export default function ProductContextProvider({ children }) {
  const [ productList, setProductList ] = useState(defaultProducts);

  const toggleFavHandler = (productId) => {
    setProductList(prevState => {
      const productIndex = prevState.findIndex(product => product.id === productId);
      const newFavStatus = !prevState[productIndex].isFavorite;
      const updatedProductList = [ ...prevState ];

      updatedProductList[productIndex] = {
        ...updatedProductList[productIndex],
        isFavorite: newFavStatus
      };

      return updatedProductList;
    });
  };

  return (
    <ProductsContext.Provider value={ {
      products: productList,
      onToggleFav: toggleFavHandler
    } }>
      { children }
    </ProductsContext.Provider>
  );
};
