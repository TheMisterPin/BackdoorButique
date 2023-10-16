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

import { Product } from "../../data/Types/ProductInterface";
import { ProductShopCard } from "..";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { Col, Row } from "react-bootstrap";
import LoadingScreen from "../ui/LoadingScreen";

export function CategoryProducts() {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useFetch<Product>(`/category/${id}`);

  return (
    <div className="category-container">
       <h2 className="categoryHeader">Products in category: {id}</h2>
      {loading && <LoadingScreen/>}
      {error && <p>Error: {error}</p>}
     
      <Row xs={1} md={2} lg={5} xl={6} className="g-4">
        {data &&
          data.map((product: Product) => (
            <Col className="productsRow" key={ id }>
              <ProductShopCard { ...product } />
            </Col>
          ))}
      </Row>
    </div>
  );
}
