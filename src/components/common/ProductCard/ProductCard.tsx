"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Rating } from "react-simple-star-rating";

import { PhoneIcon, TickIcon } from "@/components/ui/icons";
import { addProduct } from "@/store/features/cart/cartSlice";
import type { Product } from "@/types";

import { AddToCartButton } from "./AddToCartButton";
import { FavouriteButton } from "./FavouriteButton/FavouriteButton";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const productName = product.name.length >= 60 ? `${product.name.slice(0, 60)}...` : product.name;
  const productPrice = product.price?.toFixed(2);
  const discountPrice = product.discountPrice?.toFixed(2);
  return (
    <article className="group relative flex flex-col gap-3 overflow-hidden p-6">
      <div className="absolute right-3 top-3 flex flex-col gap-1 transition hover-hover:translate-x-10 hover-hover:opacity-0 hover-hover:group-hover:visible hover-hover:group-hover:translate-x-0 hover-hover:group-hover:opacity-100">
        <FavouriteButton />
        <AddToCartButton product={product} onClick={() => dispatch(addProduct(product))} />
      </div>
      <div className=" left-6 top-2 text-[10px]">
        {product.stock ? (
          <div className="flex items-center gap-2  text-green">
            <TickIcon />
            <span>in stock</span>
          </div>
        ) : (
          <div className="flex items-center gap-2  text-red">
            <PhoneIcon />
            <span>check availability</span>
          </div>
        )}
        <Link href="/">
          <Image
            alt={`${product.name} image`}
            className="h-auto w-full object-cover"
            src={product.imgUrl}
          />
        </Link>
      </div>
      <div className="flex grow flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-[2px]">
          <Rating
            allowFraction
            readonly
            className="mb-1"
            initialValue={product.rating}
            size={17}
            SVGclassName="inline"
          />
          <div className="text-[12px] text-dark-gray">Reviews ({product.reviews})</div>
        </div>
        <h5 className="grow text-[14px]">
          <Link className="text-[#564747] hover:text-[#000]" href="/">
            {productName}
          </Link>
        </h5>
        <div
          className={`flex items-center gap-1  text-[15px] font-semibold mobile:text-[18px] ${
            product.discountPrice ? "justify-between" : "justify-end"
          }`}
        >
          <div
            className={`${
              product.discountPrice && "text-[14px] font-normal text-red line-through"
            }`}
          >
            ${productPrice}
          </div>
          {discountPrice && <div>${discountPrice}</div>}
        </div>
      </div>
    </article>
  );
};
