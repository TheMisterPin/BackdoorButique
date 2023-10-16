
import { useCart } from "../../context/ShoppingCartContext";
import { ButtonWrapper } from "./navbarStyles";

import { OffCanvasCart } from "../cart/Cart";


export function ActionButtons() {
  const { cartQuantity } = useCart();

  return (
    <ButtonWrapper className="hide-on-mobile" >
      <button>
      </button>
  {/* <OffCanvasWishlist/> */}
        <OffCanvasCart/>
               ({cartQuantity})
    
    </ButtonWrapper>
  );
}
