import { ProductCard } from "@/components/common";
import { Container } from "@/components/ui";
import { products } from "@/data";

const Home = () => (
  <main>
    <Container>
      <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-5 desktop:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  </main>
);

export default Home;
