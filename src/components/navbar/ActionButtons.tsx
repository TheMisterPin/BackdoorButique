import { NavLink } from "react-router-dom";
import { useCart } from "../../context/ShoppingCartContext";
import { ButtonWrapper } from "./navbarStyles";
import { EmptyCartIcon, FullCartIcon, UserIcon } from "../../styles/styledIcons";

export function ActionButtons() {
  const { openCart, cartQuantity } = useCart();

  return (
    <ButtonWrapper className="actionButtons">
      <button>
        <NavLink to="/form"><UserIcon/></NavLink>
      </button>
      <FullCartIcon onClick={ openCart }/>
        {/* <NavLink to="/cart">Cart</NavLink> ({cartQuantity}) */}
     
    </ButtonWrapper>
  );
}
