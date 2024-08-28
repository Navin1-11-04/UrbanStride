import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import searchSlice from "./searchSlice";
import favouriteSlice from "./favouriteSlice";
import modalSlice from "./modalSlice";
import userSlice from "./userSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
    reducer : {
        cartList:cartSlice,
        filter:filterSlice,
        search:searchSlice,
        favourite:favouriteSlice,
        modal:modalSlice,
        user:userSlice,
        orders:orderSlice,
    }
});
export default store;