import { useState, useEffect } from 'react';
import { fetchProductsByCategory } from "../../data/API/ApiCalls";
import { Product } from '../../data/Types/ProductInterface';
import { ProductShopCard } from '../Index';
import { useParams } from 'react-router-dom';

export function CategoryProducts() {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<any[] | null>(null);

  useEffect(() => {
    fetchProductsByCategory(id)
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [id]);

  return (
    <div>
      <h2>Products in category: {id}</h2>
      <ul>
      {products &&
            products.map((product: Product) => (
              <li key={product.id}>
                <ProductShopCard {...product} />
              </li>
            ))}
      </ul>
    </div>
  );
}
