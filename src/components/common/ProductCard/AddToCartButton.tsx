import { RoundButton } from "@/components/ui/buttons";
import { CartIcon } from "@/components/ui/icons";
import { useAppSelector } from "@/store/store";
import type { CartProducts, Product } from "@/types";

export const AddToCartButton = ({
  product,
  ...props
}: {
  product: Product;
  onClick: () => void;
}) => {
  const cartProducts = useAppSelector((state) => state.cartProducts.cartProducts);
  const checkIsIntheCart = (arr: CartProducts, product: Product) =>
    arr.some((cartProduct) => cartProduct.id === product.id);
  const isInCart = checkIsIntheCart(cartProducts, product);
  return <RoundButton {...props} icon={<CartIcon height={25} solid={isInCart} width={25} />} />;
};
