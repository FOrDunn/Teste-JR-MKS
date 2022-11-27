import {
  Container,
  CardBody,
  CardFooter,
  ProductInfoDiv,
  ProductName,
  InfoPriceDiv,
  ProductPrice,
  ProductDescription,
  LoadingImage,
} from "./styles";

export const SkeletonCard: React.FC = () => {
  return (
    <Container>
      <CardBody>
        <LoadingImage />
        <ProductInfoDiv>
          <ProductName />
          <InfoPriceDiv>
            <ProductPrice />
          </InfoPriceDiv>
        </ProductInfoDiv>
        <ProductDescription />
      </CardBody>
      <CardFooter />
    </Container>
  );
};
