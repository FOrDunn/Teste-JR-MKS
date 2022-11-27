import ShoppingCart from "components/ShoppingCart";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { Button, ItemsCounter } from "./styles";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { RootState } from "store";

export const CartButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const shoppingCartItems = useSelector(
    (state: RootState) => state.shoppingCart
  );

  const itemsCount = shoppingCartItems.reduce(
    (atualCount, shoppingCartItem) => atualCount + shoppingCartItem.quantity,
    0
  );

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  const element = document.getElementById("__next");

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <TiShoppingCart size={20} fontWeight={900} />
        <ItemsCounter>{itemsCount}</ItemsCounter>
      </Button>

      {element &&
        createPortal(
          <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} />,
          element
        )}
    </>
  );
};
