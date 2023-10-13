import {createContext, useContext} from 'react'
import { Product } from '../data'
import { ProductContextType } from '../data'
import { useFetch } from '../Hooks/useFetch';
import { ProviderProps} from '../data'


export const ProductsContext =createContext({} as ProductContextType)

export const ProductsProvider = ({ children }: ProviderProps) => {
  const { data: products, loading, error } = useFetch<Product>("/?limit=30");

  return (
    <ProductsContext.Provider value={{ products, loading, error: error ?? '' }}>
      {children}
    </ProductsContext.Provider>
  );
};

  export const useProducts = (): ProductContextType => {
    const context = useContext(ProductsContext);
    if (!context) {
      throw new Error('useFetchProducts must be used within a FetchProductsProvider');
    }
    return context;
  };