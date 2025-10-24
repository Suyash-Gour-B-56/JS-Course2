// Author: Suyash Gour | Date: 25 October 2025
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: { cart: cartReducer },
});
