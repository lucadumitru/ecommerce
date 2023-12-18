import Image from "next/image";
import { useDispatch } from "react-redux";

import { RemoveCartProductIcon } from "@/components/ui";
import { deleteProduct } from "@/store/features/cart/cartSlice";
import type { CartProduct } from "@/types";

interface CartItemProps {
  cartProduct: CartProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ cartProduct }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex items-start justify-between gap-1 px-7 py-5">
      <div className="flex gap-2">
        <Image
          alt="Cart item img"
          className="h-[65px] w-[65px] object-contain"
          src={cartProduct.imgUrl}
        />
        <div className="flex flex-col gap-1 text-[14px]">
          <div>
            {cartProduct.name.length >= 43
              ? `${cartProduct.name.slice(0, 43)}...`
              : cartProduct.name}
          </div>
          <div className="font-semibold">
            ${(cartProduct.discountPrice || cartProduct.price).toFixed(2)}
          </div>
          <div>
            Quantity:<span className="ml-1 font-semibold">{cartProduct.quantity}</span>
          </div>
        </div>
      </div>
      <button
        aria-label="delete cart item"
        className="flex h-6 w-6 items-center justify-center text-dark-gray transition hover:text-blue"
        onClick={() => dispatch(deleteProduct(cartProduct))}
      >
        <RemoveCartProductIcon />
      </button>
    </li>
  );
};
