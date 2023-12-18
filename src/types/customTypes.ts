import type { StaticImageData } from "next/image";

export type Product = {
  id: number;
  imgUrl: StaticImageData | string;
  name: string;
  price: number;
  discountPrice?: number | null;
  rating: number;
  reviews: number;
  stock: number;
};

export type Products = Product[];

export interface CartProduct extends Product {
  quantity: number;
  totalValue: number;
}

export type CartProducts = CartProduct[];
