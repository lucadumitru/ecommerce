import { ProductCard } from "@/components/common";
import type { GetProductsQuery } from "@/graphql";

type ProductsData = GetProductsQuery["products"]["data"];

interface NewProductsSectionProps {
  data: { products: ProductsData };
}

export const NewProductsSection: React.FC<NewProductsSectionProps> = ({ data }) => {
  const { products } = data;
  return (
    <section className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-5 desktop:grid-cols-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
