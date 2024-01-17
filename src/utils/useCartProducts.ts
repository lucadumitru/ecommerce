"use client";

import { useAppSelector } from "@/store/store";

export const useCartProducts = () => useAppSelector((state) => state.cartProducts.cartProducts);
