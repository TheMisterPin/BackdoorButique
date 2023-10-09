import { LiaCartPlusSolid } from "react-icons/lia";
import { useCart } from "../../context/ShoppingCartContext";
import "./productCard.css";
import { currencyFormat } from "../../Utils/currencyHandler";
import { Link } from "react-router-dom";


type ProductCardProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
};
export function ProductShopCard({ id, title, image, price }: ProductCardProps) {
  const {
    getItemQuantity,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    removeCartItem,
  } = useCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <div className="Card" key={ id }>
        <div className="imageContainer">
          {" "}
          <img src={ image } />{" "}
        </div>
        <h4>{title}</h4>
        <div>{currencyFormat(price)}</div>
<Link to={`/productdetails/${id}`}>Show More</Link>
        {quantity === 0 ? (
          <LiaCartPlusSolid onClick={ () => increaseCartItemQuantity(id) } />
        ) : quantity === 1 ? (
          <div className="counter">
            <div>
              <button onClick={ () => removeCartItem(id) }>Delete</button>
              <span>{quantity}</span>
              <button onClick={ () => increaseCartItemQuantity(id) }>+</button>
            </div>
          </div>
        ) : (
          <div className="counter">
            <div>
              <button onClick={ () => decreaseCartItemQuantity(id) }>-</button>
              <span>{quantity}</span>
              <button onClick={ () => increaseCartItemQuantity(id) }>+</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
