import { useCart } from '../../context/ShoppingCartContext';
import edibles from '../../data/API/edibles.json';
type CartItemProps = {
    id: string;
    quantity: number;
}


export function CartItem ({id,quantity}:CartItemProps){
  const {removeCartItem} = useCart()
  const item = edibles.find(item => item.id === id)

  if(item == null) return null

  return (
    <ul className="cartItemsList">
      <li><span>{item.name}</span>
        <img src={ item.image } alt={ item.name }
         style={ {width: '100px', height: '100px', 
         objectFit: 'cover'} } />
        <span>{quantity}</span>
        <span>{item.price}</span>
        <button onClick={ () => removeCartItem(id) }>Remove</button>
      </li>
            
    </ul>)}
    