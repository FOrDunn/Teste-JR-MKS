import { getByText, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { startStore } from "store/index";
import { addItem } from "store/ShoppingCart.store";
import { ShoppingCart } from ".";

const testProduct: Product = {
  id: 1,
  brand: "Apple",
  name: "Iphone 12",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  photo: "https://www.google.com/",
  price: "4999.00",
};
const testProduct2: Product = {
  id: 2,
  brand: "Apple",
  name: "Iphone 13",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  photo: "https://www.google.com/",
  price: "7000.00",
};

describe("main/ShoppingCart", () => {
  it("Deve incrementar 1 na quantidade de items na array", async () => {
    const store = startStore();

    store.dispatch(addItem(testProduct));
    const { getByTitle, getByText } = render(
      <Provider store={store}>
        <ShoppingCart isOpen={true} setIsOpen={() => {}} />
      </Provider>
    );

    const Button = getByTitle(`increase quantity button`);

    await userEvent.click(Button);
    const value = getByText(`2`);

    expect(Number(value.textContent)).toBe(2);
  });

  it("Deve incrementar 1 na quantidade de items na array", async () => {
    const store = startStore();

    store.dispatch(addItem(testProduct));
    store.dispatch(addItem(testProduct));
    const { getByTitle, getByText } = render(
      <Provider store={store}>
        <ShoppingCart isOpen={true} setIsOpen={() => {}} />
      </Provider>
    );

    const Button = getByTitle(`descrease quantity button`);

    await userEvent.click(Button);
    const value = getByText(`1`);

    expect(Number(value.textContent)).toBe(1);
  });
  it("Deve excluir o item caso a quantidade chegue a 0", async () => {
    const store = startStore();

    store.dispatch(addItem(testProduct));

    const { getByTitle, getByText } = render(
      <Provider store={store}>
        <ShoppingCart isOpen={true} setIsOpen={() => {}} />
      </Provider>
    );

    const Button = getByTitle(`descrease quantity button`);

    await userEvent.click(Button);

    expect(Button).not.toBeInTheDocument();
  });
  it("Deve excluir o item do carrinho de compras", async () => {
    const store = startStore();

    store.dispatch(addItem(testProduct));

    const { getByTitle } = render(
      <Provider store={store}>
        <ShoppingCart isOpen={true} setIsOpen={() => {}} />
      </Provider>
    );

    const Button = getByTitle(`remove item`);

    await userEvent.click(Button);

    expect(Button).not.toBeInTheDocument();
  });

  it("Calculo do valor dos produtos", async () => {
    const store = startStore();

    store.dispatch(addItem(testProduct));
    store.dispatch(addItem(testProduct2));
    store.dispatch(addItem(testProduct2));

    const { getByTitle } = render(
      <Provider store={store}>
        <ShoppingCart isOpen={true} setIsOpen={() => {}} />
      </Provider>
    );

    const totalPriceText = getByTitle(`preco total`);
    expect(totalPriceText.textContent).toBe(`R$ 18999`);
  });
});
