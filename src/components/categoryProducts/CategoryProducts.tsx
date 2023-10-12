// import { useState, useEffect } from 'react';
// import { fetchProductsByCategory } from "../../data/API/ApiCalls";
// import { Product } from '../../data/Types/ProductInterface';
// import { ProductShopCard } from '../Index';
// import { useParams } from 'react-router-dom';
// import data from '../../data/products.json';

// export function CategoryProducts() {
//   const { id } = useParams<{ id: string }>();
//   const [products, setProducts] = useState<Product[] | null>(null);

//   useEffect(() => {
//     fetchProductsByCategory(id!)
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, [id]);


//   return (
//     <div>
//       <h2>Products in category: {id}</h2>
//       <ul>
//       {products &&
//             products.map((product: Product) => (
//               <li key={product.id}>
//                 <ProductShopCard {...product} />
//               </li>
//             ))}
//       </ul>
//     </div>
//   );
// }



import { Product } from '../../data/Types/ProductInterface';
import { ProductShopCard } from '../Index';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';


export function CategoryProducts() {
  const { id } = useParams<{ id: string }>();
  
  // Using the custom hook to fetch data
  const { data, loading, error } = useFetch<Product>(`/category/${id}`);
  
  // No need to set the products state; it's handled by the custom hook
  // const [products, setProducts] = useState<Product[] | null>(null);

  // Removed the useEffect for fetching; it's handled by the custom hook
  // useEffect(() => {
  //  // fetch logic
  // }, [id]);

  return (
    <div>
      <h2>Products in category: {id}</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
      {data &&
            data.map((product: Product) => (
              <li key={product.id}>
                <ProductShopCard {...product} />
              </li>
            ))}
      </ul>
    </div>
  );
}
