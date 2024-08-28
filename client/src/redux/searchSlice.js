import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: true,
        products: [],
        searchQuery: [],
    },
    reducers: {
        searchChange: (state, action) => {
            state.search = action.payload;
        },
        searchProduct: (state, action) => {
            if (action.payload === "") {
                state.searchQuery = state.products;
            } else {
                state.searchQuery = state.products.filter((shoe) => 
                    shoe.name.toLowerCase().includes(action.payload.toLowerCase())
                );
            }
        },
        setProducts: (state, action) => {
            state.products = action.payload;
            state.searchQuery = action.payload; 
        }
    }
});

export const { searchChange, searchProduct, setProducts } = searchSlice.actions;
export default searchSlice.reducer;
