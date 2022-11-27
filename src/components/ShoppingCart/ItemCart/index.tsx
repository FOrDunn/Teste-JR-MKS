import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import {
  CartItem,
  ItemName,
  ItemPrice,
  ItemQuantityDiv,
  QuantityTitle,
  QuantityButtons,
  IncreaseQuantityButton,
  DecreaseQuantityButton,
  HR,
  QuantityValue,
  PriceQuantityContainer,
} from "../styles";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  deleteItem,
} from "store/ShoppingCart.store";

interface Props {
  cartItem: CartItem;
}

export const ItemCart: React.FC<Props> = ({ cartItem }) => {
  const { product, quantity } = cartItem;
  const productTitle = `${product.brand} ${product.name}`;
  const productPriceText = `R$ ${Number(product.price).toFixed()}`;

  const dispatch = useDispatch();

  return (
    <CartItem>
      <AiOutlineClose
        width={25}
        onClick={() => {
          dispatch(deleteItem(product.id));
        }}
      />

      <Image src={product.photo} width={46} height={57} alt={productTitle} />
      <ItemName>{productTitle}</ItemName>
      <PriceQuantityContainer>
        <ItemQuantityDiv>
          <QuantityTitle>Qtd:</QuantityTitle>
          <QuantityButtons>
            <IncreaseQuantityButton
              onClick={() => {
                dispatch(decrementItemQuantity(product.id));
              }}
            >
              -
            </IncreaseQuantityButton>
            <HR />
            <QuantityValue>{quantity}</QuantityValue>
            <HR />
            <DecreaseQuantityButton
              onClick={() => {
                dispatch(incrementItemQuantity(product.id));
              }}
            >
              +
            </DecreaseQuantityButton>
          </QuantityButtons>
        </ItemQuantityDiv>
        <ItemPrice>{productPriceText}</ItemPrice>
      </PriceQuantityContainer>
    </CartItem>
  );
};
