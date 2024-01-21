import { NewProductsSection } from "@/components/sections";
import { Container } from "@/components/ui";
import { gql } from "@/graphql/client";

export const revalidate = 600;

const Home = async () => {
  const products = (await gql.getProducts()).products.data;
  return (
    <main className="grow">
      <Container>
        <NewProductsSection data={{ products }} />
      </Container>
    </main>
  );
};

export default Home;
