// ProductShopCard.tsx
import { useCart } from '../../context/ShoppingCartContext';
import { currencyFormat } from '../../Utils/currencyHandler';
import { Link } from 'react-router-dom';
import './productCard.css';
import { CartActionButtons } from '../ui/cartActionButtons';

type ProductCardProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
};

export function ProductShopCard({ id, title, image, price }: ProductCardProps) {
  const { getItemQuantity } = useCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <li className="Card" key={id}>
        <div className="imageContainer">
          <img
            className="image"
            alt="product"
            width="100%"
            height="100%"
            style={{ objectFit: 'contain' }}
            src={image}
          />
        </div>
        <div className="cardBody">
          <h4>{title}</h4>
          <div>{currencyFormat(price)}</div>
          <Link to={`/productdetails/${id}`}>Show More</Link>
        </div>
        <CartActionButtons id={id} quantity={quantity} />
      </li>
    </>
  );
}
