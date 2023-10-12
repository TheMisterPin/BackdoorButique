import { currencyFormat } from "../../Utils/currencyHandler";
import { useCart } from "../../context/ShoppingCartContext";
import { fetchall } from "../../data/API/ApiCalls";
import './cart.css'

type CartItemProps = {
  id: number;
  quantity: number;
  image: string;
  title: string;
}

export function CartItem({ id, quantity}: CartItemProps) {
  const edibles = fetchall();
  const { removeCartItem } = useCart();
  const item = edibles.find((item) => item.id === id);

  if (item == null) return null;

  return (<>
    <ul className="cartItemsList" style={{color:"black"}}>
      <li>
        <span className="cardItemTitle">{item.title}</span>
        <img
          src={item.image || "" }
          alt={item.title}
          style={{ width: "100px", height: "100px", objectFit: "contain" } }
        />
        <span className="cardItemQuantity">{quantity}</span>
        <span className="cardItemQuantity">{currencyFormat(item.price! * quantity)}</span>
        <span className="cardItemDetalis">{currencyFormat(item.price!)}</span>
       
        <button onClick={() => removeCartItem(id)}>Remove</button>

      </li>
       
    </ul>
   </>
  );
}
