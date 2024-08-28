import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartList',
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.product_id === action.payload.product_id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementItem: (state, action) => {
      const selectedItem = state.cart.find(item => item.product_id === action.payload.id);
      if (selectedItem) {
        selectedItem.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const selectedItem = state.cart.find(item => item.product_id === action.payload.id);
      if (selectedItem) {
        if (selectedItem.quantity > 1) {
          selectedItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter(item => item.product_id !== action.payload.id);
        }
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(item => item.product_id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    }
  }
});


export const { setCart, addToCart, incrementItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;