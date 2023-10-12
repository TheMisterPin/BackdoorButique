import React from 'react';
import styled from 'styled-components';

const IconImg = styled.img`
  width: 50px;
  height: 50px;
`;
const IconImgSmall = styled.img`
  width: 25px;
  height: 25px;
`;
interface IconProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const AddToCartIcon: React.FC<IconProps> = ({onClick }) => {
  return <IconImg onClick={onClick} src="https://img.icons8.com/stickers/100/add-shopping-cart--v2.png" />
}
export const EmptyCartIcon:React.FC<IconProps> = ({ onClick }) => {
  return <IconImg onClick={onClick} src="https://img.icons8.com/stickers/100/shopping-cart.png" />
}
export const FullCartIcon:React.FC<IconProps> = ({ onClick }) => {
  return <IconImg onClick={onClick} src="https://img.icons8.com/stickers/100/shopping-cart-loaded.png"/>
}
export const PlusIcon: React.FC<IconProps> = ({ onClick }) => {
  return <IconImgSmall onClick={onClick} src="https://img.icons8.com/stickers/100/plus-math.png"  />
}
export const MinusIcon: React.FC<IconProps> = ({ onClick }) => {
  return <IconImgSmall onClick={onClick} src="https://img.icons8.com/stickers/100/minus-math.png"  />
}
export const UserIcon: React.FC<IconProps> = ({ onClick }) => {
  return <IconImg onClick={onClick} src="https://img.icons8.com/stickers/100/user.png" />
}
export const CheckoutIcon: React.FC<IconProps> = ({ onClick }) => {
  return <IconImg onClick={onClick} src="https://img.icons8.com/stickers/100/cash-in-hand" />
}
