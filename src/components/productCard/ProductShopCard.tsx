// // ProductShopCard.tsx
// import { useCart } from '../../context/ShoppingCartContext';
// import { currencyFormat } from '../../Utils/currencyHandler';
// import { Link } from 'react-router-dom';
// import { Card, Row, Col, Container, Button } from 'react-bootstrap';

// import './productCard.css';
// import { CartActionButtons } from '../ui/cartActionButtons';


// type ProductCardProps = {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description?: string;
// };

// export function ProductShopCard({ id, title, image, price }: ProductCardProps) {
//   const { getItemQuantity } = useCart();
//   const quantity = getItemQuantity(id);

//   return (
//     <>
//       <li className="Card" key={id}>
//         <div className="imageContainer">
//           <img
//             className="image"
//             alt="product"          
//             style={{ objectFit: 'contain' }}
//             src={image}
//           />
//         </div>
//         <div className="cardBody">
//           <h4>{title}</h4>
//           <div>{currencyFormat(price)}</div>
          
//         </div>
//         <div className="cardFooter">
//         </div>
       
//       </li>
//     </>
//   );
// }


import { useCart } from '../../context/ShoppingCartContext';
import { currencyFormat } from '../../Utils/currencyHandler';
import { Link } from 'react-router-dom';
import { Card} from 'react-bootstrap';
import'./productCard.css';
import { CartActionButtons } from '../ui/cartActionButtons';
import { titleHandler } from '../../Utils/titleFomatter';

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
    <Card className='Card'>
     <div className="imageContainer"style={{objectFit:'contain'}}>   
    <Card.Img src={image} />
 </div>
    <Card.Body className="ProductCardBody">
      <div className="ProductInfo">
        <Card.Title>{titleHandler(title)}
</Card.Title>
        <Card.Text>Price: {currencyFormat(price)}</Card.Text>
      </div>
      <div className="ProductActions">
      <Link to={`/productdetails/${id}`}>Show More</Link>
      <CartActionButtons id={id} quantity={quantity} />
      </div>
    </Card.Body>
  </Card>
);
}
  
