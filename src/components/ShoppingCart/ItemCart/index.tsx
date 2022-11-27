import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  deleteItem,
} from "store/ShoppingCart.store";

import {
  CartItem,
  DecreaseQuantityButton,
  HR,
  IncreaseQuantityButton,
  ItemName,
  ItemPrice,
  ItemQuantityDiv,
  PriceQuantityContainer,
  QuantityButtons,
  QuantityTitle,
  QuantityValue,
} from "./styles";

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
        title="remove item"
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
              title="descrease quantity button"
              onClick={() => {
                dispatch(decrementItemQuantity(product.id));
              }}
            >
              -
            </IncreaseQuantityButton>
            <HR />
            <QuantityValue title={`quantidade:${quantity}`}>
              {quantity}
            </QuantityValue>
            <HR />
            <DecreaseQuantityButton
              title="increase quantity button"
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
