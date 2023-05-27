import { Types } from 'mongoose';
import { Status } from '~Enums/status';

export as namespace models;

export interface Category {
  name: string;
  icon: string;
}

export type Ingredients = Category 

export interface Product {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredients[];
  category: Types.ObjectId;
}

export interface Order {
  table: string;
  status?: Status;
  createdAt?: Date;
  products: {
    product: Types.ObjectId;
    quantity: number;
  }[];
}
