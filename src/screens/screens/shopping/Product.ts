export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor({
    id,
    name,
    price,
    quantity,
  }: {
    id: number;
    name: string;
    price: number;
    quantity: 1;
  }) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.quantity = quantity;
  }
}
