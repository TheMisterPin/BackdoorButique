/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useCart } from '../../context/ShoppingCartContext'
import { currencyFormat } from '../../Utils/currencyHandler'
import './productCard.css'
import { CartActionButtons } from '../ui/cartActionButtons'
import { titleHandler } from '../../Utils/titleFomatter'

export type ProductCardProps = {
  id: number;
  title?: string;
  image: string;
  price: number;
  description?: string;
}

export function ProductShopCard({
  id, title, image, price,
}: ProductCardProps) {
  const { getItemQuantity } = useCart()
  const quantity = getItemQuantity(id)

  return (
    <Card className="Card">
      <div className="imageContainer" style={{ objectFit: 'contain' }}>
        <Card.Img src={image} />
      </div>
      <Card.Body className="ProductCardBody">
        <div className="ProductInfo">
          {
            title
              ? <Card.Title>{titleHandler(title)}</Card.Title>
              : null
          }
          <Card.Text>
            Price:
            {currencyFormat(price)}
          </Card.Text>
        </div>
        <div className="ProductActions">
          <Link to={`/productdetails/${id}`}>Show More</Link>
          <CartActionButtons id={id} quantity={quantity} />
        </div>
      </Card.Body>
    </Card>
  )
}
