import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { currencyFormat } from "../../Utils/currencyHandler";
import { useCart, useProducts } from "../../context";
import { StyledNavLink } from "../navbar/navbarStyles";
import { CartItem } from "./CartItem";
import { FullCartIcon } from '../../styles/styledIcons';

export function Cart() {
  const { cartItems } = useCart();
  const { products, loading } = useProducts();

  const cartProducts = products.filter((product) =>
    cartItems.some((cartItem) => cartItem.id === product.id)
  );

  return (
    <div className="OffCanvasLayout">
      <div >
        <h1 className="pageTitle">Your Cart</h1>
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
            <ul className='offCanvasList'>
              {cartProducts.map((item) => {
                const correspondingCartItem = cartItems.find(
                  (cartItem) => cartItem.id === item.id
                );
                const quantity = correspondingCartItem
                  ? correspondingCartItem.quantity
                  : 1;

                return (
                  <CartItem
                    key={item.id}
                    {...item}
                    quantity={quantity}
                    isLoading={loading}
                  />
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <p className='pageTitle'>Cart is empty</p>
            <StyledNavLink to="/shop">Shop</StyledNavLink>
          </>
        )}
      </div>
    </div>
  );
}

export function OffCanvasCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FullCartIcon onClick={handleShow}/>
        
      
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


