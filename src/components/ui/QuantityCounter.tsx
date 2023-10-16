import React from 'react';
import { MinusIcon, PlusIcon } from '../../styles/styledIcons';
import { useCart } from '../../context';

interface QuantityCounterProps {
  productId: number;
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({ productId }) => {
  const { 
    getItemQuantity, 
    increaseCartItemQuantity, 
    decreaseCartItemQuantity 
  } = useCart();

  const currentQuantity = getItemQuantity(productId);

  return (
    <div className="d-flex align-items-center">
      <MinusIcon onClick={() => decreaseCartItemQuantity(productId)} />
      <div className="mx-2 border rounded p-2">
        {currentQuantity}
      </div>
      <PlusIcon onClick={() => increaseCartItemQuantity(productId)} />
    </div>
  );
};