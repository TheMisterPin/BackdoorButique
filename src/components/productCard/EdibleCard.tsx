import { currencyFormat } from '../../Utils/currencyHandler';
import { useCart} from '../../context/ShoppingCartContext';
type EdibleCardProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

export function EdibleCard({ id, name, image, price, description }: EdibleCardProps) {

  const {
    getItemQuantity, 
    increaseCartItemQuantity, 
    decreaseCartItemQuantity, 
    removeCartItem} = useCart()

  const quantity = getItemQuantity(id)

  return (
    <>
      <div className="card" key={ id }>

        <img src={ image } alt={ name } style={{
          height: '100px',
          width: '100px',
         }} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{currencyFormat(price)}</p>
      </div>


      <div className="cardFooter">
        {quantity === 0 ? (
          <button onClick={ () => increaseCartItemQuantity(id) }>Add to Cart</button>
        ) : quantity === 1 ? (
          <div className="counter">
            <div>
              <button onClick={ () => removeCartItem(id) }>Delete</button>
              <span>{quantity}</span>
              <button onClick={ () => increaseCartItemQuantity(id) } >+</button>
            </div>
          </div>
        ) : (
          <div className="counter">
            <div>
              <button onClick={ () => decreaseCartItemQuantity(id) }>-</button>
              <span>{quantity}</span>
              <button onClick={ () => increaseCartItemQuantity(id) }>+</button>
            </div>
          </div>
        )}
      </div>


    </>)
}