import { RoundButton } from "@/components/ui/buttons";
import { CartIcon } from "@/components/ui/icons";
import type { CartProduct } from "@/store/features/cart/cartSlice";
import { useAppSelector } from "@/store/store";
import type { Product } from "@/types";

export const AddToCartButton = ({
  product,
  ...props
}: {
  product: Product;
  onClick: () => void;
}) => {
  const cartProducts = useAppSelector((state) => state.cartProducts.cartProducts.products);
  const checkIsIntheCart = (arr: CartProduct[], product: Product) =>
    arr.some((cartProduct) => cartProduct.id === product.id);
  const isInCart = Array.isArray(cartProducts) && checkIsIntheCart(cartProducts, product);
  return <RoundButton {...props} icon={<CartIcon height={25} solid={isInCart} width={25} />} />;
};
