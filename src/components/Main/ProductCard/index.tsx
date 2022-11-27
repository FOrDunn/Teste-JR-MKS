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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const productTitle = `${product.brand} ${product.name}`;
  const productPriceText = `R$ ${Number(product.price).toFixed()}`;

  const dispatch = useDispatch();

  const handleButton = () => {
    toast.success("Produto adicionado no carrinho!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(addItem(product));
  };

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
      <CardFooter onClick={handleButton}>
        <RiShoppingBag3Line width={20} />
        <ButtonText>COMPRAR</ButtonText>
      </CardFooter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default ProductCard;
