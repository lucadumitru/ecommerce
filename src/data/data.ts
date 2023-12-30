import testImg from "public/img/test.jpg";
import testImg2 from "public/img/test2.jpg";

import type { Products, TInfoItem } from "@/types";

export const products: Products = [
  {
    discountPrice: 499.0,
    id: 1,
    imgUrl: testImg,
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On",
    price: 599.0,
    rating: 3.5,
    reviews: 4,
    stock: 0
  },
  {
    discountPrice: null,
    id: 2,
    imgUrl: testImg2,
    name: "EX DISPLAY : MSI Pro ",
    price: 399.0,
    rating: 5,
    reviews: 4,
    stock: 2
  },
  {
    discountPrice: null,
    id: 3,
    imgUrl: testImg2,
    name: "EX DISPLAY : MSI Pro ",
    price: 399.0,
    rating: 5,
    reviews: 4,
    stock: 2
  },
  {
    discountPrice: null,
    id: 4,
    imgUrl: testImg2,
    name: "EX DISPLAY : MSI Pro ",
    price: 399.0,
    rating: 5,
    reviews: 4,
    stock: 2
  },
  {
    discountPrice: null,
    id: 5,
    imgUrl: testImg2,
    name: "EX DISPLAY : MSI Pro ",
    price: 399.0,
    rating: 5,
    reviews: 4,
    stock: 2
  },
  {
    discountPrice: null,
    id: 6,
    imgUrl: testImg2,
    name: "EX DISPLAY : MSI Pro ",
    price: 399.0,
    rating: 5,
    reviews: 4,
    stock: 2
  }
];

export const infoItems: TInfoItem[] = [
  {
    icon: "/icons/support.svg",
    label: "Product Support",
    text: "Up to 3 years on-site warranty available for your peace of mind."
  },
  {
    icon: "/icons/account.svg",
    label: "Personal Account",
    text: "With big discounts, free delivery and a dedicated support specialist."
  },
  {
    icon: "/icons/discount.svg",
    label: "Amazing Savings",
    text: "Up to 70% off new Products, you can be sure of the best price."
  }
];
