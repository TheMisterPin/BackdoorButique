/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from 'react'
import { Product, ProductContextType, ProviderProps } from '../data'

import { useFetch } from '../Hooks/useFetch'

export const ProductsContext = createContext({} as ProductContextType)

export function ProductsProvider({ children }: ProviderProps) {
  const { data: products, loading } = useFetch<Product>('/?limit=30')

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}

    </ProductsContext.Provider>
  )
}

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error('useFetchProducts must be used within a FetchProductsProvider')
  }

  return context
}
