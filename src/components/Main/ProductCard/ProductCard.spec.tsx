import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { startStore } from "store/index";
import { ProductCard } from ".";

const testProduct: Product = {
  id: 1,
  brand: "Apple",
  name: "Iphone 12",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  photo: "https://www.google.com/",
  price: "4999.99",
};

describe("main/ProductCard", () => {
  it("Deve adicionar o item na array de items do carrinho", async () => {
    const store = startStore();
    const { getByText } = render(
      <Provider store={store}>
        <ProductCard product={testProduct} />
      </Provider>
    );
    const Button = getByText("COMPRAR");
    await userEvent.click(Button);
    const { shoppingCart } = store.getState();
    expect(shoppingCart).toStrictEqual([{ product: testProduct, quantity: 1 }]);
  });
  it("Deve chamar a funcao de adicionar item e verificar se o item foi adicionado na array", async () => {
    const store = startStore();
    const { getByText } = render(
      <Provider store={store}>
        <ProductCard product={testProduct} />
      </Provider>
    );
    const Button = getByText("COMPRAR");
    await userEvent.click(Button);
    const { shoppingCart } = store.getState();
    expect(shoppingCart).toStrictEqual([{ product: testProduct, quantity: 1 }]);
  });
});
