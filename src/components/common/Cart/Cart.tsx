"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  Button,
  ButtonLink,
  CartIcon,
  CloseIcon,
  EmptyCartIcon,
  PayPalIcon
} from "@/components/ui";
import { useAppSelector } from "@/store/store";

import { CartItem } from "./CartItem/CartItem";

export const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cartProducts.cartProducts);
  const [cartOpen, setCartOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const totalProducts = cartProducts.products
    ? cartProducts.products.reduce((acc, product) => acc + product.quantity, 0)
    : 0;
  const pathName = usePathname();
  const cartPath = pathName.includes("cart");
  const handleMenuOpen = () => {
    if (!cartPath) {
      setCartOpen(!cartOpen);
      document.body.classList.toggle("lock");
    }
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        bodyRef.current &&
        buttonRef.current &&
        !bodyRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setCartOpen(false);
        document.body.classList.remove("lock");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    if (cartPath) {
      setCartOpen(false);
      document.body.classList.add("lock");
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [cartOpen, cartPath]);
  return (
    <div className="flex items-center">
      <button
        aria-label="cart button"
        className="group relative"
        type="button"
        onClick={handleMenuOpen}
      >
        <CartIcon
          className="text-white transition-all laptop:text-black laptop:group-hover:text-blue"
          height={30}
          width={30}
        />
        <span className="absolute right-0 top-0 flex min-w-max  -translate-y-[50%]  translate-x-[20%] items-center justify-center rounded-full bg-white px-[6px] py-[1px] text-xs font-semibold text-blue laptop:bg-blue laptop:text-white">
          {totalProducts}
        </span>
      </button>
      <div
        className={`fixed right-0 top-0 z-10 min-h-full w-full shadow-lg  before:absolute before:h-full before:w-full before:bg-[rgb(1,86,255,0.3)] ${
          cartOpen ? "before:opacity-100" : "invisible before:opacity-0"
        } before:transition-opacity`}
      >
        <div
          ref={bodyRef}
          className={`absolute right-0 h-full w-[80%] bg-white pt-10 transition-all  mobile:w-[310px] ${
            !cartOpen ? "translate-x-[100%] " : "translate-x-0"
          }`}
        >
          <button
            ref={buttonRef}
            aria-label="close cart button"
            className="group absolute right-2 top-2"
            onClick={handleMenuOpen}
          >
            <CloseIcon className="text-black transition-all group-hover:text-blue" width="30" />
          </button>
          <div className="flex h-full flex-col divide-y">
            <div className="px-7 py-5">
              <div className="flex flex-col gap-y-1 text-center">
                <div className="text-[18px] font-semibold capitalize leading-6">My Cart</div>
                <div className="text-xs text-dark-gray">
                  {" "}
                  <span>{totalProducts}</span> items in cart
                </div>
              </div>
              {!!cartProducts.products && cartProducts.products.length > 0 && (
                <div className="mt-5">
                  <ButtonLink href="/cart" variant="outline">
                    View or edit your cart
                  </ButtonLink>
                </div>
              )}
            </div>
            <ul className="flex flex-col divide-y overflow-scroll ">
              {cartProducts.products &&
                cartProducts.products.map((product) => (
                  <CartItem key={product.id} cartProduct={product} variant="small" />
                ))}
            </ul>
            {cartProducts.products && cartProducts.products.length ? (
              <div className="px-7 py-5">
                <div className="flex w-full items-center justify-center gap-1 text-[14px] font-semibold text-dark-gray">
                  Order Total:{" "}
                  <span className="text-[18px] text-black ">
                    ${cartProducts.orderTotal.toFixed(2)}
                  </span>{" "}
                </div>
                <div className="mt-3 flex flex-col gap-y-2">
                  <Button variant="solid">Go to Checkout</Button>
                  <Button
                    className="bg-yellow text-[12px] text-black hover:bg-light-yellow"
                    endIcon={<PayPalIcon />}
                  >
                    <span>Checkout</span>
                  </Button>
                </div>{" "}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 px-7 py-5">
                <EmptyCartIcon className="text-light-gray" height={50} width={50} />
                <span>Your cart is empty</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
