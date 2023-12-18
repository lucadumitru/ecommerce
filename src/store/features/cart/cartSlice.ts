import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { CartProducts, Product } from "@/types";

const cartSlice = createSlice({
  initialState: {
    cartProducts: [] as CartProducts
  },
  name: "cart",
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const existingProduct = state.cartProducts.find(
        (cartProduct) => cartProduct.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalValue =
          (action.payload.discountPrice || action.payload.price) * existingProduct.quantity;
      } else {
        state.cartProducts.push({
          ...action.payload,
          quantity: 1,
          totalValue: (action.payload.discountPrice || action.payload.price) * 1
        });
      }
    },
    deleteProduct(state, action: PayloadAction<Product>) {
      state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload.id);
    }
  }
});

export default cartSlice.reducer;
export const { addProduct, deleteProduct } = cartSlice.actions;
