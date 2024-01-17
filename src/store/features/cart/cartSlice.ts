import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { Product } from "@/types";

export interface CartProduct extends Product {
  quantity: number;
  subTotal: number;
}

type Action = {
  product: Product;
  quantity?: number;
};

interface CartState {
  cartProducts: {
    products: CartProduct[];
    orderTotal: number;
  };
}

const initialState: CartState = {
  cartProducts: {
    orderTotal: 0,
    products: []
  }
};

function calculateOrderTotal(products: CartProduct[]): number {
  const orderTotal = products.reduce((total, product) => total + product.subTotal, 0);
  return orderTotal;
}

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct(state: CartState, action: PayloadAction<Action>) {
      const existingProduct = state.cartProducts.products.find(
        (cartProduct) => cartProduct.id === action.payload.product.id
      );
      if (existingProduct) {
        state.cartProducts.products = state.cartProducts.products.map((product) =>
          product.id === action.payload.product.id
            ? {
                ...product,
                quantity: product.quantity + (action.payload.quantity || 1),
                subTotal:
                  (action.payload.product.attributes.discountPrice ||
                    action.payload.product.attributes.price) *
                  (product.quantity + 1)
              }
            : product
        );
      } else {
        state.cartProducts.products = [
          ...state.cartProducts.products,
          {
            ...action.payload.product,
            quantity: action.payload?.quantity || 1,
            subTotal: action.payload.product.attributes.discountPrice
              ? action.payload.product.attributes.discountPrice
              : action.payload.product.attributes.price
          }
        ];
      }
      state.cartProducts.orderTotal = calculateOrderTotal(state.cartProducts.products);
    },
    changeProductQty(
      state: CartState,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) {
      const productIndex = state.cartProducts.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      if (productIndex !== -1) {
        state.cartProducts.products = state.cartProducts.products.map((product, index) =>
          index === productIndex
            ? {
                ...product,
                quantity: action.payload.quantity,
                subTotal:
                  (product.attributes.discountPrice || product.attributes.price) *
                  action.payload.quantity
              }
            : product
        );
        state.cartProducts.orderTotal = calculateOrderTotal(state.cartProducts.products);
      }
    },
    clearCart(state: CartState) {
      state.cartProducts.products = [];
      state.cartProducts.orderTotal = calculateOrderTotal(state.cartProducts.products);
    },
    deleteProduct(state: CartState, action: PayloadAction<Product>) {
      state.cartProducts.products = state.cartProducts.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.cartProducts.orderTotal = calculateOrderTotal(state.cartProducts.products);
    }
  }
});

export default cartSlice.reducer;
export const { addProduct, deleteProduct, changeProductQty, clearCart } = cartSlice.actions;
