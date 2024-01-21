import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false
};

const menuSlice = createSlice({
  initialState,
  name: "menu",
  reducers: {
    toggleMenuOpen(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
      console.log(state.menuOpen);
    }
  }
});

export default menuSlice.reducer;
export const { toggleMenuOpen } = menuSlice.actions;
