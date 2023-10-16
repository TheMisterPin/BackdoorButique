import { useCart } from '../context';
import { currencyFormat } from '../Utils/currencyHandler';
currencyFormat

export function CheckoutForm() {
  const { cartItems, removeCartItem } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = totalAmount > 2000 ? 0.02 * totalAmount : 0;

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity} - Price: {currencyFormat(item.price * item.quantity)}
            <button onClick={() => removeCartItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        Total: {currencyFormat(totalAmount - discount)}
        {discount > 0 && <p>You saved: {currencyFormat(discount)}</p>}
      </div>
      <button onClick={() => {
       
      }}>Confirm Purchase</button>
    </div>
  );
}
