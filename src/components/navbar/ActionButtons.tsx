import { NavLink } from "react-router-dom";
import { useCart } from "../../context/ShoppingCartContext";
import { ButtonWrapper } from "./navbarStyles";

export function ActionButtons() {
  const { openCart, cartQuantity } = useCart();

  return (
    <ButtonWrapper className="actionButtons">
      <button>
        <NavLink to="/form">Form</NavLink>
      </button>
      <button onClick={ openCart }>
        <NavLink to="/cart">Cart</NavLink> ({cartQuantity})
      </button>
    </ButtonWrapper>
  );
}
