import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "../typesModels";
import { RootState } from "./store";
interface cartState{
  cart:CartItem[];
}
const initialState:cartState = {
  cart: [] ,

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

      if(item?.quantity==0) cartSlice.caseReducers.deleteItem(state,action);
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


export const getCurrentQuantityById = (id: number) => (state: RootState) => {
  // Access state.cart directly, not state.cart.cart
  const item = state.cart.cart.find((item) => item.pizzaId === id);
  return item?.quantity ?? 0;
};
