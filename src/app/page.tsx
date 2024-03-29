import { notFound } from "next/navigation";

import { NewProductsSection } from "@/components/sections";
import { Container } from "@/components/ui";
import { gql } from "@/graphql";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Home = async () => {
  const products = (await gql.getProducts().catch(notFound)).products.data;

  return (
    <main className="grow">
      <Container>
        <NewProductsSection data={{ products }} />
      </Container>
    </main>
  );
};

export default Home;
