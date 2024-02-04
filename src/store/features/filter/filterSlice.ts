import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [] as string[],
  price: { max: 9999 as number, min: 0 as number }
};

const menuSlice = createSlice({
  initialState,
  name: "filter",
  reducers: {
    addBrand(state, action: PayloadAction<string>) {
      if (!state.brands.includes(action.payload)) {
        state.brands = [...state.brands, action.payload];
      } else {
        state.brands = state.brands.filter((brand) => brand !== action.payload);
      }
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.price.max = action.payload;
    },
    setMinPrice(state, action: PayloadAction<number>) {
      state.price.min = action.payload;
    }
  }
});

export default menuSlice.reducer;
export const { setMaxPrice, setMinPrice, addBrand } = menuSlice.actions;
