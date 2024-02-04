import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

import cartSlice from "@/store/features/cart/cartSlice";
import filterSlice from "@/store/features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    cartProducts: cartSlice,
    filters: filterSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
