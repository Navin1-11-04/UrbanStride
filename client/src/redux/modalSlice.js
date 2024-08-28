import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
  selectedProduct: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalChange: (state, action) => {
      state.modal = action.payload.modal;
      state.selectedProduct = action.payload.product;
    },
  },
});

export const { modalChange } = modalSlice.actions;
export default modalSlice.reducer;
