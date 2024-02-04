import { notFound } from "next/navigation";

import { ProductSection } from "@/components/sections";
import { gql } from "@/graphql";

interface ProductPageProps {
  params: { slug: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = (await gql.getProduct({ slug: params.slug }).catch(notFound)).products.data[0];

  return <ProductSection data={{ product }} />;
};

export default ProductPage;
