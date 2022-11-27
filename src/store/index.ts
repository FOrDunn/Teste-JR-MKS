import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./ShoppingCart.store";

export const startStore = () =>
  configureStore({
    reducer: { shoppingCart: shoppingCartReducer },
  });

const store = startStore();

export type RootState = ReturnType<typeof store.getState>;

export default store;
