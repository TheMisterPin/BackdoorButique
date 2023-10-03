import {  ProductShopCard } from "../Index"

import './shop.css'
import { fetchAndRender } from "../../data/API/ApiCalls";
import { Product } from '../../data/Types/ProductInterface';



// Shop.tsx
export function Shop() {
  const products = fetchAndRender();

  return(
    <>
      <section className="shop">   
        <h1> Shop</h1>
        <ul className="products">
          {products && products.map((product:Product) => {  // Loop through each product
            return (
              <li key={product.id}>  {/* use product.id */}
                <ProductShopCard {...product}/>  {/* Spread individual product */}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
