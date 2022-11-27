import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState: [] as CartItem[],
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const key = product.id;
      const cartItem = state.find((item) => item.product.id === key);
      if (!cartItem) {
        state.push({ product, quantity: 1 });
        return;
      }

      cartItem.quantity = cartItem.quantity + 1;
    },
    incrementItemQuantity(state, action: PayloadAction<number>) {
      const key = action.payload;
      const cartItem = state.find((item) => item.product.id === key);

      if (!cartItem) return;

      cartItem.quantity = cartItem.quantity + 1;
    },
    decrementItemQuantity(state, action: PayloadAction<number>) {
      const key = action.payload;
      const cartItem = state.find((item) => item.product.id === key);

      if (!cartItem) return;

      if (cartItem.quantity > 1) {
        cartItem.quantity = cartItem.quantity - 1;
        return;
      }

      const cartItemIndex = state.findIndex((item) => item.product.id === key);

      state.splice(cartItemIndex, 1);
    },
    deleteItem(state, action: PayloadAction<number>) {
      const key = action.payload;

      const cartItemIndex = state.findIndex((item) => item.product.id === key);

      state.splice(cartItemIndex, 1);
    },
  },
});

export const {
  addItem,
  decrementItemQuantity,
  deleteItem,
  incrementItemQuantity,
} = shoppingCart.actions;

export default shoppingCart.reducer;
