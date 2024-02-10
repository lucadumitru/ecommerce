import { FilterSection } from "@/components/common";
import { Container } from "@/components/ui";
import { gql } from "@/graphql";

import { FilteredProducts } from "./FilteredProducts";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const LaptopsPage = async () => {
  const products = (await gql.getProducts()).products.data;
  const prices = products.map((product) => product.attributes.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const brands = (await gql.getBrands()).brands.data.map((brand) => brand.attributes.title);

  return (
    <Container className="flex flex-col gap-2 laptop:flex-row">
      <FilterSection
        brands={brands}
        className="w-full laptop:max-w-[300px]"
        endPrice={maxPrice}
        startPrice={minPrice}
      />
      <FilteredProducts endPrice={maxPrice} startPrice={minPrice} />
    </Container>
  );
};
export default LaptopsPage;
