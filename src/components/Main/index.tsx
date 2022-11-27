import ProductCard from "./ProductCard";
import { SkeletonCard } from "./SkeletonCard";
import { Container, ProductsList } from "./styles";

interface Props {
  products?: Product[];
  isLoading: boolean;
}

export const Main: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <Container>
      <ProductsList>
        {!isLoading && products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </ProductsList>
    </Container>
  );
};

export default Main;
