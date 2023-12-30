"use client";

import { useDispatch } from "react-redux";

import { BreadCrumbs, CartItem } from "@/components/common/";
import { Button, Container, EmptyCartIcon, PayPalIcon, Typography } from "@/components/ui";
import { clearCart } from "@/store/features/cart/cartSlice";
import { useAppSelector } from "@/store/store";

const CartPage = () => {
  const cartProducts = useAppSelector((state) => state.cartProducts.cartProducts);
  const shipping = cartProducts.products.length ? 21 : 0;
  const tax = cartProducts.products.length ? 1.91 : 0;
  const calcGts = (Subtotal: number, percent: number) => (Subtotal * percent).toFixed(2);
  const gts = +calcGts(cartProducts.orderTotal, 0.1);
  const orderTotal = Number(cartProducts.orderTotal + shipping + tax + gts).toFixed(2);
  const dispatch = useDispatch();
  return (
    <main className="pb-16 pt-5">
      <Container>
        <BreadCrumbs />
        <Typography className="mb-4 tablet:mb-7 " tag="h1" variant="title-2">
          Shopping Cart
        </Typography>
        <div className="flex flex-col gap-4 tablet:flex-row tablet:items-start">
          <div className="grow">
            <div className=" hidden gap-2 border-b pb-3 text-[14px] font-semibold laptop:flex">
              <span className="w-[40%]">Items</span>
              <div className="grid w-[60%] grid-cols-[1fr_1fr_1fr_25px] gap-2">
                <span>Price</span>
                <span>Qty </span>
                <span>Subtotal</span>
                <span />
              </div>
            </div>
            <ul className="grid grid-flow-row divide-y">
              {cartProducts.products.length ? (
                cartProducts.products.map((cartProduct) => (
                  <CartItem key={cartProduct.id} cartProduct={cartProduct} variant="large" />
                ))
              ) : (
                <div className="mx-auto mt-5 flex flex-col items-center justify-center font-semibold text-light-gray">
                  <EmptyCartIcon height={100} width={100} />
                  <span className=" capitalize">The cart is empty</span>
                </div>
              )}
            </ul>
            <div className="mt-2 flex w-full justify-end">
              {!!cartProducts.products.length && (
                <Button
                  className="w-auto bg-black hover:bg-black-700"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Shopping Cart
                </Button>
              )}
            </div>
          </div>
          <div className="shrink-1 h-auto w-full bg-dark-white p-4 tablet:max-w-[446px]">
            <Typography className="mb-5" tag="h2" variant="title-5">
              Summary
            </Typography>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[13px] font-semibold">
                <div>Subtotal</div>
                <div>${cartProducts.orderTotal}</div>
              </div>
              <div className="flex justify-between text-[13px] font-semibold">
                <div className="flex flex-col">
                  Shipping{" "}
                  <span className="mt-1 max-w-[70%] text-[10px] font-normal text-dark-gray">
                    (Standard Rate - Price may vary depending on the item/destination. TECS Staff
                    will contact you.)
                  </span>
                </div>
                <div>${`${cartProducts.products.length ? shipping : 0}`}</div>
              </div>
              <div className="flex justify-between text-[13px] font-semibold">
                <div>Tax</div>
                <div>${tax}</div>
              </div>
              <div className="flex justify-between text-[13px] font-semibold">
                <div>GTS (10%)</div>
                <div>${gts}</div>
              </div>
              <div className="flex justify-between text-[13px] font-semibold">
                <div>Order Total</div>
                <div>${orderTotal}</div>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <Button className="py-4">Proceed to Checkout</Button>
              <Button
                className="bg-yellow py-4 text-black hover:bg-light-yellow"
                endIcon={<PayPalIcon />}
              >
                <span>Checkout</span>
              </Button>
              <Button disabled className="py-4" variant="outline">
                Check Out with Multiple Addresses
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default CartPage;
