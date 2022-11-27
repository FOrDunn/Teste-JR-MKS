import { startStore } from ".";
import {
  addItem,
  decrementItemQuantity,
  deleteItem,
  incrementItemQuantity,
} from "./ShoppingCart.store";

const testProduct: Product = {
  id: 1,
  brand: "Apple",
  name: "Iphone 12",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  photo: "https://www.google.com/",
  price: "4999.99",
};

describe("store/shoppingCart", () => {
  it("Adicionar um item na array", () => {
    const store = startStore();

    store.dispatch(addItem(testProduct));

    const { shoppingCart } = store.getState();

    expect(shoppingCart).toStrictEqual([{ product: testProduct, quantity: 1 }]);
  });
  it("Ao adicionar um item que ja existe na array deve acrescentar 1 na quantidade", () => {
    const store = startStore();

    store.dispatch(addItem(testProduct));
    store.dispatch(addItem(testProduct));
    const { shoppingCart } = store.getState();

    expect(shoppingCart).toStrictEqual([{ product: testProduct, quantity: 2 }]);
  });

  it("Deve aumentar 1 item na quantidade do produto utilizando o id", () => {
    const store = startStore();
    store.dispatch(addItem(testProduct));
    store.dispatch(incrementItemQuantity(testProduct.id));
    const { shoppingCart } = store.getState();

    expect(shoppingCart).toStrictEqual([{ product: testProduct, quantity: 2 }]);
  });
  it("Nao deve mudar a array, pois nao existe um item com este id", () => {
    const store = startStore();
    store.dispatch(addItem(testProduct));
    const { shoppingCart: shoppingcart1 } = store.getState();
    store.dispatch(incrementItemQuantity(4));
    const { shoppingCart: shoppingcart2 } = store.getState();

    expect([...shoppingcart1]).toStrictEqual([...shoppingcart2]);
  });
  it("Deve diminuir 1 item na quantidade do produto utilizando o id", () => {
    const store = startStore();
    store.dispatch(addItem(testProduct));
    store.dispatch(incrementItemQuantity(testProduct.id));
    store.dispatch(decrementItemQuantity(testProduct.id));
    const { shoppingCart } = store.getState();

    expect(shoppingCart).toStrictEqual([{ product: testProduct, quantity: 1 }]);
  });
  it("Deve excluir o item da array, caso a quantidade do item chegue a 0", () => {
    const store = startStore();
    store.dispatch(addItem(testProduct));
    store.dispatch(decrementItemQuantity(testProduct.id));
    const { shoppingCart } = store.getState();

    expect(shoppingCart).toStrictEqual([]);
  });
  it("Deve excluir o item da array pelo id", () => {
    const store = startStore();
    store.dispatch(addItem(testProduct));
    store.dispatch(deleteItem(testProduct.id));
    const { shoppingCart } = store.getState();

    expect(shoppingCart).toStrictEqual([]);
  });
});
