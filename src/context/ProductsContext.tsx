import { createContext, useContext, useState } from 'react'
import { Product } from '../data'
import { ProductContextType } from '../data'
import { useFetch } from '../Hooks/useFetch'
import { ProviderProps } from '../data'
import { ErrorModal } from '../components/Index'

export const ProductsContext = createContext({} as ProductContextType);

export const ProductsProvider = ({ children }: ProviderProps) => {
  const { data: products, loading, error } = useFetch<Product>("/?limit=30");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const loadFromJson = () => {
    // Mocking the behavior for loading from JSON.
    // Implement the actual logic to load products from the local JSON file here.
    console.log("Loading data from local JSON file...");
  };

  if (error && !showErrorModal) {
    setShowErrorModal(true);
  }

  return (
    <ProductsContext.Provider value={{ products, loading, error: error ?? '' }}>
      {children}
      <ErrorModal 
        show={showErrorModal} 
        error={error} 
        onHide={() => setShowErrorModal(false)} 
        loadFromJson={loadFromJson} 
      />
    </ProductsContext.Provider>
  );
}

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useFetchProducts must be used within a FetchProductsProvider');
  }
  return context;
}