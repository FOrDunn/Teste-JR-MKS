import ProductCard from "./ProductCard";
import { Container, ProductsList } from "./styles";

interface Props {
  products: Product[];
}

export const Main: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
    </Container>
  );
};

export default Main;
