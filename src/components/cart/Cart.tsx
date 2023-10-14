import { useCart } from "../../context/ShoppingCartContext";
import { currencyFormat } from "../../Utils/currencyHandler";
import "./cart.css";
import { CartItem } from "./CartItem";

type CartProps = {
  isCartOpen: boolean;
};

export function Cart({ isCartOpen }: CartProps) {
  const { closeCart, cartItems } = useCart();

  if (!isCartOpen) {
    return null;
  }

  return (
    <div className="cartPopup">
      <div className="cartPopup-content">
        <button onClick={closeCart}>Close</button>
        <h1>Your cart</h1>
        <ul>
           {cartItems.map((item) => <CartItem key={item.id} {...item} />)}
        </ul>
        
        <div className="CartTotal">
          Total: {currencyFormat(cartItems.reduce((total, cartItem) => total + (cartItem.price || 0) * cartItem.quantity, 0))}
        </div>
        
        {cartItems.length === 0 && <div>Your cart is empty!</div>}
      </div>
    </div>
  );
}