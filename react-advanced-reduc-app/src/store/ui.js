import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartVisible: false,
  notification: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    toggleNotificationBar(state, action) {
      const { status, title, message } = action.payload;
  
      state.notification = { status, title, message };
    },
    dismissNotificationVar(state) {
      state.notification = null
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
