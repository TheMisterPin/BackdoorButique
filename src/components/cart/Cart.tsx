import { currencyFormat } from "../../Utils/currencyHandler";
import { useCart, useProducts } from "../../context";
import { StyledNavLink } from "../navbar/navbarStyles";
import { CartItem } from "./CartItem";

export function Cart() {
  const { cartItems } = useCart();
  const { products, loading } = useProducts();

  const cartProducts = products.filter((product) =>
    cartItems.some((cartItem) => cartItem.id === product.id)
  );

  return (
    <div className="">
      <div className="">
        <h1>your cart</h1>

        {cartItems.length > 0 ? (
          <>
            <div className="CartTotal">
              {currencyFormat(
                cartItems.reduce((total, cartItem) => {
                  const item = cartProducts.find(
                    (item) => item.id === cartItem.id
                  );
                  const itemPrice = item ? item.price : 0;
                  const itemQuantity = cartItem.quantity;

                  return total + itemPrice * itemQuantity;
                }, 0)
              )}
            </div>
            <ul>
              {cartProducts.map((item) => {
                const correspondingCartItem = cartItems.find(
                  (cartItem) => cartItem.id === item.id
                );
                const quantity = correspondingCartItem
                  ? correspondingCartItem.quantity
                  : 1;

                return (
                  <CartItem
                    key={ item.id }
                    { ...item }
                    quantity={ quantity }
                    isLoading={ loading }
                  />
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <p>Cart is empty</p>
            <StyledNavLink to="/shop">Shop</StyledNavLink>
          </>
        )}
      </div>
    </div>
  );
}
