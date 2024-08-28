import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favourite: [],
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const existingItemIndex = state.favourite.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        state.favourite = state.favourite.filter(item => item.id !== action.payload.id);
      } else {
        state.favourite.push(action.payload);
      }
    },
    setFavorites: (state, action) => {
      state.favourite = action.payload;
    },
  },
});

export const { toggleFavourite, setFavorites } = favouriteSlice.actions;
export default favouriteSlice.reducer;
