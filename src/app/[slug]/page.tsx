import { ProductSection } from "@/components/sections";
import { gql } from "@/graphql/client";

// export async function getStaticPaths() {
//   const { products } = await gql.getProducts();
//   const paths = products.data.map((product) => ({ params: { slug: product.attributes.slug } }));
//   return { paths, fallback: false };
// }

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await gql.getProduct({ slug: params.slug });
  const product = data.products.data[0];
  return (
    <main>
      <ProductSection data={{ product }} />
    </main>
  );
};

export default Page;
