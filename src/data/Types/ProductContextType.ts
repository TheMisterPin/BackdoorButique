import { Product } from './ProductInterface';
export type ProductContextType = {
    products : Product[];
    loading : boolean;
    error : string | null  

}