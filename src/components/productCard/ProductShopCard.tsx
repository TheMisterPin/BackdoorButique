import { currencyFormat } from '../../Utils/currencyHandler';
import { useCart} from '../../context/ShoppingCartContext';
import { ProductProps } from '../../data/Types/ProductInterface';


export function ProductShopCard({ id, title, image, price, description }: ProductProps) {

  const {
    getItemQuantity, 
    increaseCartItemQuantity, 
    decreaseCartItemQuantity, 
    removeCartItem
  } = useCart()

  const quantity = getItemQuantity(id)

  return (
    <>
      <div className="card" key={ id }>
    

        
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
     


      <div className="cardFooter">
        {quantity === 0 ? (
          <button onClick={ () => increaseCartItemQuantity(id) }>Add to Cart</button>
        ) : 
        quantity === 1 ? (
          <div className="counter">
            <div>
              <button onClick={ () => removeCartItem(id) }>Delete</button>
              <span>{quantity}</span>
              <button onClick={ () => increaseCartItemQuantity(id) } >+</button>
            </div>
          </div>
        ) : 
        (
          <div className="counter">
            <div>
              <button onClick={ () => decreaseCartItemQuantity(id) }>-</button>
              <span>{quantity}</span>
              <button onClick={ () => increaseCartItemQuantity(id) }>+</button>
            </div>
          </div>
        )}
      </div>
 </div>

    </>)
}