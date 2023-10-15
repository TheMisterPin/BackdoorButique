import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../data/API/ApiCalls';
import { Product } from '../data/Types/ProductInterface';
import { currencyFormat } from '../Utils/currencyHandler';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const numId = Number(id);
    if (!isNaN(numId)) { 
      fetchProductById(numId)
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
        });
    } else {
      console.error('Invalid product ID');
    }
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='base'>
      
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: {currencyFormat(product.price)}</p>
      <img src={product.image} alt={product.title} />
      <p>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
    </div>
  );
}
