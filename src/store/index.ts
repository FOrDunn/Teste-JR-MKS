import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./ShoppingCart.store";

const store = configureStore({
  reducer: { shoppingCart: shoppingCartReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
