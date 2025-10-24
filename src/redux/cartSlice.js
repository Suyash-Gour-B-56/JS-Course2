// Author: Suyash Gour | Date: 25 October 2025
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, name, price, image, quantity}
  total: 0,
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exists = state.items.find(i => i.id === product.id);
      if (!exists) {
        state.items.push({ ...product, quantity: 1 });
        state.totalQuantity += 1;
        state.total += product.price;
      }
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.total += item.price;
      }
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.total -= item.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.total -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
