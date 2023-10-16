
import { useCart } from "../../context/ShoppingCartContext";
import { currencyFormat } from "../../Utils/currencyHandler";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./productCard.css";
import { CartActionButtons } from "../ui/cartActionButtons";
import { titleHandler } from "../../Utils/titleFomatter";
import { WishlistIcon } from "../ui/WishlistIcon";


type ProductCardProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
};

export function ProductShopCard({ id, title, image, price }: ProductCardProps) {
  const { getItemQuantity  } = useCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="productShopCard container">
      <div className="productShopImage" style={{ objectFit: "contain" }}>
        <Card.Img src={image} />
      </div>
      <Card.Body className="ProductShopCardBody">
        <div className="ProductShopInfo ">
          <Card.Title>{titleHandler(title)}</Card.Title>
          <Card.Text>Price: {currencyFormat(price)}</Card.Text>
        </div>
        <div className="ProductShopActions">
          <Link to={`/productdetails/${id}`}>Show More</Link>
          <CartActionButtons id={id} quantity={quantity} />
          <WishlistIcon id={id}/>
        </div>
      </Card.Body>
    </Card>
  );
}
