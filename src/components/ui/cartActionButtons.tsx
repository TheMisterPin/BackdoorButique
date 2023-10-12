import React, { useReducer } from 'react';
import { AddToCartIcon, FullCartIcon, PlusIcon, MinusIcon } from '../../styles/styledIcons';
import { useCart } from '../../context/ShoppingCartContext';
import Badge from 'react-bootstrap/Badge'; 
import { Cart } from '../cart/Cart';

interface State {
  quantity: number;
}

type CartActions =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' };

const initialState = { quantity: 0 };

const reducer = (state: State, action: CartActions): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, quantity: state.quantity + 1 };
    case 'DECREMENT':
      return { ...state, quantity: Math.max(0, state.quantity - 1) };
    default:
      return state;
  }
};

interface CartActionButtonsProps {
  id: number;
  quantity: number;
}

export const CartActionButtons: React.FC<CartActionButtonsProps> = ({ id }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
  } = useCart();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
    increaseCartItemQuantity(id);
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
    decreaseCartItemQuantity(id);
  };

  return (
    <div>
      {state.quantity === 0 && <AddToCartIcon onClick={handleIncrement} />}
      {state.quantity === 1 && (<>
      <FullCartIcon/>  <button onClick={handleIncrement}> Add More</button></>)}
      {state.quantity >= 2 && (
        <div className="counter-container">
          <MinusIcon onClick={handleDecrement} />
          <FullCartIcon/> 
          <Badge>{state.quantity}</Badge>
          <PlusIcon onClick={handleIncrement} />
        </div>
      )}
    </div>
  );
};