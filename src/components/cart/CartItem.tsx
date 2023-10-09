import { useCart } from "../../context/ShoppingCartContext";
import { fetchall } from "../../data/API/ApiCalls";

type CartItemProps = {
  id: number;
  quantity: number;
  image: string;
  title: string;
  price: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const edibles = fetchall();
  const { removeCartItem } = useCart();
  const item = edibles.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <ul className="cartItemsList">
      <li>
        <span>{item.title}</span>
        <img
          src={item.image || "" }
          alt={item.title}
          style={{ width: "100px", height: "100px", objectFit: "cover" } }
        />
        <span>{quantity}</span>
        <span>{item.price}</span>
        <button onClick={() => removeCartItem(id)}>Remove</button>
      </li>
    </ul>
  );
}
