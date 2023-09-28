import { useCart } from '../../context/ShoppingCartContext'
import './cart.css'
import {CartItem}  from './CartItem';

type CartProps = {
  isCartOpen:boolean}

export function Cart({isCartOpen}:CartProps) {
  const {closeCart, cartItems} = useCart()

  if (isCartOpen === false) {
    return null;
  }

  return (
    <div className="cartPopup">
      <div className="cartPopup-content">
        <button onClick={ closeCart }>Close</button>
        <h1>your cart</h1>
        <ul>




          {cartItems.map((item)=>(
            <CartItem key={ item.id } { ...item }/>))}
        </ul>


          
      </div>
    </div>
  );
}
