import React from "react";
import styled from "styled-components";
import { useCart } from "../../context";

interface CartProps {
  onClick: () => void;
  productId: number; // assuming the CartIcon is tied to a specific product
}

const CartDiv = styled.div<{ backgroundImage: string }>`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  cursor: pointer;
  position: relative;
`;

const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px;
  font-size: 12px;
`;

const CartIcon: React.FC<CartProps> = ({ onClick, productId }) => {
  const { getItemQuantity } = useCart();
  const quantity = getItemQuantity(productId);

  let backgroundImage = "https://img.icons8.com/shopping-cart.png";

  if (quantity === 0) {
    backgroundImage = "https://img.icons8.com/empty-cart.png";
  } else if (quantity >= 1) {
    backgroundImage = "https://img.icons8.com/full-cart.png";
  }

  return (
    <CartDiv onClick={onClick} backgroundImage={backgroundImage}>
      {quantity && quantity > 0 && <Badge>{quantity}</Badge>}
    </CartDiv>
  );
};

export default CartIcon;