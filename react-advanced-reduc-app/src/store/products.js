import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 'prod-1',
      title: 'Product 1',
      price: 6,
      description: 'This is a the description of product 1!'
    },
    {
      id: 'prod-2',
      title: 'Product 2',
      price: 12,
      description: 'This is a the description of product 2'
    },
    {
      id: 'prod-3',
      title: 'Product 3',
      price: 5.95,
      description: 'This is a the description of product 3'
    }
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      const { newProduct } = action.payload;

      state.products.push(newProduct);
    },
    removeProduct(state, action) {
      const { id } = action.payload;

      state.products = state.products.filter(product => product.id !== id);
    }
  }
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
