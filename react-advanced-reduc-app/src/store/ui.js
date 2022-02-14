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
      const payload = action;

      if (payload === null) {
        state.notification = null;
      } else {
        const { status, title, message } = payload;
  
        state.notification = { status, title, message };
      }
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
