import { NavLink } from "react-router-dom";
import { useCart } from "../../context/ShoppingCartContext";
import { ButtonWrapper } from "./navbarStyles";
import {
  EmptyCartIcon,
  FullCartIcon,
  UserIcon,
} from "../../styles/styledIcons";

export function ActionButtons() {
  const { cartQuantity } = useCart();

  return (
    <ButtonWrapper className="hide-on-mobile">
      <button>
        <NavLink to="/form">
          <UserIcon />
        </NavLink>
      </button>
      <NavLink to="/cart">
        {" "}
        <FullCartIcon  />
      </NavLink>{" "}
      ({cartQuantity})
    </ButtonWrapper>
  );
}
