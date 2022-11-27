interface Product {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}
