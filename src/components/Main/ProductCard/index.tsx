import { useDispatch } from "react-redux";
import { addItem } from "store/ShoppingCart.store";
import Image from "next/image";
import {
  Container,
  CardBody,
  CardFooter,
  ProductInfoDiv,
  ProductName,
  InfoPriceDiv,
  ProductPrice,
  ProductDescription,
  ButtonText,
} from "./styles";
import { RiShoppingBag3Line } from "react-icons/ri";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const productTitle = `${product.brand} ${product.name}`;
  const productPriceText = `R$ ${Number(product.price).toFixed()}`;

  const dispatch = useDispatch();

  return (
    <Container>
      <CardBody>
        <Image
          src={`${product.photo}`}
          width={120}
          height={120}
          alt={`${product.name}`}
        />
        <ProductInfoDiv>
          <ProductName title={productTitle}>{productTitle}</ProductName>
          <InfoPriceDiv>
            <ProductPrice>{productPriceText}</ProductPrice>
          </InfoPriceDiv>
        </ProductInfoDiv>
        <ProductDescription title={product.description}>
          {product.description}
        </ProductDescription>
      </CardBody>
      <CardFooter
        onClick={() => {
          dispatch(addItem(product));
        }}
      >
        <RiShoppingBag3Line width={20} />
        <ButtonText>COMPRAR</ButtonText>
      </CardFooter>
    </Container>
  );
};

export default ProductCard;
