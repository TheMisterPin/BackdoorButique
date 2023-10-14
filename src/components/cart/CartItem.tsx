import { currencyFormat } from "../../Utils/currencyHandler";
import { useCart } from "../../context/ShoppingCartContext";
import 'bootstrap/dist/css/bootstrap.css';

type CartItemProps = {
  id: number;
  quantity: number;
  image: string;
  title: string;
  price: number;
}

export function CartItem({ id, quantity, image, title, price }: CartItemProps) {
  const { removeCartItem } = useCart();

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-2">
          <img src={image || ""} alt={title} className="img-fluid rounded-circle" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
        </div>
        <div className="col-4">
          <h3 className="mb-0">{title}</h3>
          <span className="text-muted">{currencyFormat(price)} x {quantity}</span>
        </div>
        <div className="col-4">
          <h3 className="mb-0">{currencyFormat(price * quantity)}</h3>
        </div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={() => removeCartItem(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}