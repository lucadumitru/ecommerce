import { ProductSection } from "@/components/sections";
import { gql } from "@/graphql/client";

export async function generateStaticParams() {
  const { products } = await gql.getProducts();
  const paths = products.data.map((product) => ({ slug: product.attributes.slug }));
  return paths;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const product = (await gql.getProduct({ slug: params.slug })).products.data[0];
  return (
    <main>
      <ProductSection data={{ product }} />
    </main>
  );
};

export default Page;
