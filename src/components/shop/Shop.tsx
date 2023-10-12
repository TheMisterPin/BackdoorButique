import { useEffect } from 'react';
import { ProductShopCard } from "../Index";
import { Product } from "../../data/Types/ProductInterface";
import "./shop.css";
import { useFetch } from '../../Hooks/useFetch';
import { useApiTimer } from '../../Hooks/useApiTimer';

export function Shop() {
  const { data: products, loading, error } = useFetch<Product>("/?limit=30");
  const { logTimeAndSession, sessionTime, callCount } = useApiTimer();
  
  useEffect(() => {
    const startTime = performance.now();
    if (!loading && !error) {
      const elapsedTime = performance.now() - startTime;
      logTimeAndSession(elapsedTime);
    }
  }, [loading, error]);

  return (
    <>
      <section className="shop">
        <h1>Shop</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul className="products" >
          {products &&
            products.map((product: Product) => (
          
                <ProductShopCard {...product} />
            
            ))}
        </ul>
        <p>Total API calls made: {callCount}</p>
        <p>Total session time: {sessionTime} ms</p>
      </section>
    </>
  );
}