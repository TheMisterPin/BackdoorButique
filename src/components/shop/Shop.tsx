import { ProductShopCard } from "../Index";
import { fetchAndRender } from "../../data/API/ApiCalls";
import { Product } from "../../data/Types/ProductInterface";
import "./shop.css";

// Shop.tsx
export function Shop() {
  const products = fetchAndRender();

  return (
    <>
      <section className="shop">
        <h1> Shop</h1>
        <ul className="products">
          {products &&
            products.map((product: Product) => (
              <li key={product.id}>
                <ProductShopCard {...product} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
