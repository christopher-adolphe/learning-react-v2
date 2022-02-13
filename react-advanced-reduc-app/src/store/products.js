import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    // {
    //   id: 'prod-1',
    //   title: 'Product 1',
    //   price: 6,
    //   description: 'This is a the description of product 1!'
    // },
    // {
    //   id: 'prod-2',
    //   title: 'Product 2',
    //   price: 12,
    //   description: 'This is a the description of product 2'
    // },
    // {
    //   id: 'prod-3',
    //   title: 'Product 3',
    //   price: 5.95,
    //   description: 'This is a the description of product 3'
    // }
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts(state, action) {
      const { items } = action.payload;

      state.items = [ ...items ];
    },
    addProduct(state, action) {
      const { newProduct } = action.payload;

      state.items.push(newProduct);
    },
    removeProduct(state, action) {
      const { id } = action.payload;

      state.items = state.items.filter(product => product.id !== id);
    }
  }
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
