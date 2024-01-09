export as namespace models;

export interface Category {
  _id: string;
  name: string;
  icon: string;
}

export type Ingredients = Category 

export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredients[];
  category: string;
}

export interface Order {
  _id: string;
  table: string;
  status: string;
  products: {
    product: Product;
    quantity: number;
  }[];
}