import { FilterSection } from "@/components/common";
import { Container } from "@/components/ui";
import { gql } from "@/graphql";

import { FilteredProducts } from "./FilteredProducts";

const LaptopsPage = async () => {
  const products = (await gql.getProducts()).products.data;
  const prices = products.map((product) => product.attributes.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const brands = (await gql.getBrands()).brands.data.map((brand) => brand.attributes.title);
  return (
    <Container className="flex gap-2">
      <FilterSection
        brands={brands}
        className="max-w-[300px]"
        endPrice={maxPrice}
        startPrice={minPrice}
      />
      <FilteredProducts />
    </Container>
  );
};
export default LaptopsPage;
