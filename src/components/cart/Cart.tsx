import { useCart } from "../../context/ShoppingCartContext";
import { currencyFormat } from "../../Utils/currencyHandler";
import "./cart.css";
import { CartItem } from "./CartItem";

type CartProps = {
  isCartOpen: boolean;
};

export function Cart({ isCartOpen }: CartProps) {
  const { closeCart, cartItems } = useCart();

  if (isCartOpen === false) {
    return null;
  }

  return (
    <div className="cartPopup">
      <div className="cartPopup-content">
        <button onClick={ closeCart }>Close</button>
        <h1>your cart</h1>
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
           <div className="CartTotal">
         {currencyFormat(
          cartItems.reduce((total, cartItem) => {
            const item = cartItems.find((item) => item.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
          )}
         
        </div>
        </ul>

        
      </div>
    </div>
  );
}
