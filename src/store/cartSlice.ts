import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "../typesModels";

const initialState = {
  cart: [] as CartItem[],

  /// cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};
const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      state.cart.push(item);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const pizzaId = action.payload;
      state.cart = state.cart.filter((item) => item.pizzaId !== pizzaId);
    },
    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      const pizzaId = action.payload;
      const item: CartItem | undefined = state.cart.find(
        (item) => item.pizzaId === pizzaId
      );

      if (item != undefined) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const pizzaId = action.payload;
      const item: CartItem | undefined = state.cart.find(
        (item) => item.pizzaId === pizzaId
      );

      if (item != undefined) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
