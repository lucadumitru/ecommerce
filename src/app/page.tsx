import { ProductCard } from "@/components/common";
import { Container } from "@/components/ui";
import { gql } from "@/graphql/client";

// function slugify(str) {
//   return String(str)
//     .normalize("NFKD") // split accented characters into their base characters and diacritical marks
//     .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
//     .trim() // trim leading or trailing whitespace
//     .toLowerCase() // convert to lowercase
//     .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
//     .replace(/\s+/g, "-") // replace spaces with hyphens
//     .replace(/-+/g, "-"); // remove consecutive hyphens
// }

const Home = async () => {
  const data = await gql.getProducts();
  const products = data.products.data;
  // const product = await gql.getProduct({ sl: "victus" });
  // const slug = slugify(product.product.data.attributes.name);
  // console.log(slug);
  // console.log(product.products);
  return (
    <main className="grow">
      <Container>
        <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-5 desktop:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Home;
