import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: false
    },
    reducers: {
        filterChange: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
