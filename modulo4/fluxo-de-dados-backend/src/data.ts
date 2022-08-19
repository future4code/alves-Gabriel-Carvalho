export type Produto = {
  id: string;
  name: string;
  price: number;
};

export const produtos: Produto[] = [
  {
    id: "1",
    name: "camiseta",
    price: 100,
  },
  {
    id: "2",
    name: "tenis",
    price: 200,
  },
  {
    id: "3",
    name: "mochila",
    price: 300,
  },
];
