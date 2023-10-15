import { currencyFormat } from '../../Utils/currencyHandler';
import { useCart, useProducts } from '../../context';
import { CartItem } from './CartItem';


export function Cart() {
  const {  cartItems } = useCart();
  const { products, loading } = useProducts();
  const cartProducts = products.filter(product => 
    cartItems.some(cartItem => cartItem.id === product.id)
  );
  
  return (
    <div className="cartPopup">
    <div className="cartPopup-content">
      
      <h1>your cart</h1>
      <ul>
  {cartProducts.map((item) => (
    <CartItem key={item.id} {...item} isLoading={loading} />
  ))}

  <div className="CartTotal">
    {currencyFormat(
      cartProducts.reduce((total, cartItem) => {
        const item = cartProducts.find((item) => item.id === cartItem.id);
        console.log("Current Item:", item); // Debugging line
        console.log("Current Total:", total); // Debugging line
        const itemPrice = item?.price ?? 0; // Nullish coalescing
        const itemQuantity = cartItem.quantity ?? 0; // Nullish coalescing
        console.log("Item Price:", itemPrice); // Debugging line
        console.log("Item Quantity:", itemQuantity); // Debugging line
        return total + itemPrice * itemQuantity;
      }, 0)
    )}
  </div>
</ul>







      
    </div>
  </div>
  );
}