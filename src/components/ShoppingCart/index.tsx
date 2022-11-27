import { FiX } from "react-icons/fi";
import { Dispatch, SetStateAction } from "react";
import { ItemCart } from "./ItemCart";
import {
  CartHeader,
  CartTitle,
  CartBody,
  Container,
  CartFooter,
  FinalPriceDiv,
  CartItemsContainer,
  ItemsListContainer,
  FinalizeShoppingButton,
  CloseButton,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ShoppingCart: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const shoppingCartItems = useSelector(
    (state: RootState) => state.shoppingCart
  );

  const totalPrice = shoppingCartItems.reduce(
    (atualCount, shoppingCartItem) =>
      atualCount + shoppingCartItem.product.price * shoppingCartItem.quantity,
    0
  );

  const totalPriceText = `R$ ${Number(totalPrice).toFixed()}`;
  return (
    <Container data-is-open={isOpen}>
      <CartBody>
        <CartHeader>
          <CartTitle>Carrinho de compras</CartTitle>
          <CloseButton onClick={() => setIsOpen(false)}>
            <FiX />
          </CloseButton>
        </CartHeader>
        <ItemsListContainer>
          <CartItemsContainer>
            {shoppingCartItems.map((item) => (
              <ItemCart key={item.product.id} cartItem={item} />
            ))}
          </CartItemsContainer>
        </ItemsListContainer>
        <FinalPriceDiv>
          <p>Total:</p>
          <p>{totalPriceText}</p>
        </FinalPriceDiv>
      </CartBody>
      <CartFooter>
        <FinalizeShoppingButton>Finalizar Compra</FinalizeShoppingButton>
      </CartFooter>
    </Container>
  );
};

export default ShoppingCart;
