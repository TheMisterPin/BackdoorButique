import { Product } from './ProductInterface';


export type CartItemType = Pick<Product, 'id' | 'title' | 'price' | 'image' | 'quantity'>;
