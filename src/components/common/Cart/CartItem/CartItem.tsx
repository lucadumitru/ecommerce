import { cva } from "class-variance-authority";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { NumberInput, RemoveCartProductIcon } from "@/components/ui";
import { deleteProduct } from "@/store/features/cart/cartSlice";
import type { CartProduct } from "@/types";

type CarItemVariants = "small" | "large";

interface CartItemProps {
  cartProduct: CartProduct;
  variant: CarItemVariants;
}

const classes = cva("", {
  variants: {
    variant: {
      small: "flex-col flex gap-1 text-[14px] w-full grow",
      large: "grid grid-cols-[1fr_1fr_1fr_25px] w-full gap-2 laptop:w-[60%]"
    }
  }
});

export const CartItem: React.FC<CartItemProps> = ({ cartProduct, variant = "small" }) => {
  const dispatch = useDispatch();
  const removeItemButton = (
    <button
      aria-label="delete cart item"
      className="flex h-6 w-6 items-center justify-center justify-self-end text-dark-gray transition hover:text-blue"
      onClick={() => dispatch(deleteProduct(cartProduct))}
    >
      <RemoveCartProductIcon />
    </button>
  );

  return (
    <li className={` ${variant === "small" ? "px-7 py-5" : "py-5"} flex justify-between gap-2 `}>
      <div
        className={`${
          variant === "small" ? "grow gap-2" : "flex-wrap gap-2 laptop:flex-nowrap"
        } flex w-full`}
      >
        <div className={`${variant === "large" && "flex w-full gap-2 laptop:w-[40%]"}  `}>
          <Image
            alt="Cart item img"
            src={cartProduct.imgUrl}
            width={120}
            className={`${
              variant === "small"
                ? "max-h-[65px] max-w-[65px]"
                : "max-h-[70px] max-w-[70px] tablet:max-h-[120px] tablet:max-w-[120px] "
            } object-contain `}
          />
          {variant === "large" && (
            <h5 className="w-full text-[12px] mobile:text-[14px] laptop:max-w-[270px] laptop:text-base">
              {cartProduct.name}
            </h5>
          )}
        </div>
        <div className={classes({ variant })}>
          {variant === "small" && (
            <h5>
              {cartProduct.name.length >= 43
                ? `${cartProduct.name.slice(0, 43)}...`
                : cartProduct.name}
            </h5>
          )}
          <div className="grow font-semibold">
            {variant === "large" && (
              <div className="mb-2 block text-[12px] laptop:hidden">Price</div>
            )}
            <div>${(cartProduct.discountPrice || cartProduct.price).toFixed(2)}</div>
          </div>
          {variant === "small" ? (
            <div>
              Quantity:<span className="ml-1 font-semibold">{cartProduct.quantity}</span>
            </div>
          ) : (
            <>
              <div className="flex w-full flex-col">
                <span className="mb-2 text-[12px] font-semibold laptop:hidden">Qty</span>
                <span className="w-[75px]">
                  <NumberInput productId={cartProduct.id} startValue={cartProduct.quantity} />
                </span>
              </div>
              <div className="font-semibold">
                <div className="mb-2 block text-[12px] laptop:hidden">Subtotal</div>
                <div>${cartProduct.subTotal.toFixed(2)}</div>
              </div>
            </>
          )}
          {variant === "large" && removeItemButton}
        </div>
      </div>
      {variant === "small" && removeItemButton}
    </li>
  );
};
