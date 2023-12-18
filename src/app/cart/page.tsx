"use client";

import { CartItem } from "@/components/common/";
import { Container, Typography } from "@/components/ui";
import { useAppSelector } from "@/store/store";

const CartPage = () => {
  const cartProducts = useAppSelector((state) => state.cartProducts.cartProducts);
  return (
    <main>
      <Container>
        <div>bread crumps</div>
        <Typography tag="h1" variant="title-2">
          Shopping Cart
        </Typography>
        <div className="flex ">
          <div className="grow">
            <div>items</div>
            <ul>
              {cartProducts.map((cartProduct) => (
                <CartItem cartProduct={cartProduct} />
              ))}
            </ul>
          </div>
          <div className="min-w-[446px] bg-gray-400">summary</div>
        </div>
      </Container>
    </main>
  );
};
export default CartPage;
