import React from "react";
import styled from "styled-components";
const logo = "https://img.icons8.com/stickers/75/shopaholic.png"


export const LogoIcon = styled.img`
  height: 3rem;
  width: 3rem; // Added this to maintain aspect ratio. Adjust as needed.
  background-image: url(${logo});
  background-size: cover;
`;
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

export const AddToCartIcon: React.FC<IconProps> = ({ onClick }) => {
  return (
    <IconImg
      onClick={onClick}
      src="https://img.icons8.com/stickers/100/add-shopping-cart--v2.png"
    />
  );
};
export const EmptyCartIcon: React.FC<IconProps> = ({ onClick }) => {
  return (
    <IconImg
      onClick={onClick}
      src="https://img.icons8.com/stickers/100/shopping-cart.png"
    />
  );
};
export const FullCartIcon: React.FC<IconProps> = ({ onClick }) => {
  return (
    <IconImg
      onClick={onClick}
      src="https://img.icons8.com/stickers/100/shopping-cart-loaded.png"
    />
  );
};
export const PlusIcon: React.FC<IconProps> = ({ onClick }) => <IconImgSmall onClick={onClick} src="https://img.icons8.com/stickers/100/plus-math.png"  />
export const MinusIcon: React.FC<IconProps> = ({ onClick }) => <IconImgSmall onClick={onClick} src="https://img.icons8.com/stickers/100/minus-math.png"  />
export const UserIcon: React.FC<IconProps> = ({ onClick }) => <IconImg onClick={onClick} src="https://img.icons8.com/stickers/100/user.png" />
export const CheckoutIcon: React.FC<IconProps> = ({ onClick }) => <IconImg onClick={onClick} src="https://img.icons8.com/stickers/100/cash-in-hand" />
export const HomeIcon: React.FC<IconProps> = ({ onClick }) => <IconImg onClick={onClick} src="https://img.icons8.com/stickers/25/cottage.png" />
export const AddToWishlistIcon: React.FC<IconProps> = ({ onClick }) => <IconImg onClick={onClick} src="https://img.icons8.com/stickers/100/love-letter.png" />
export const RemoveFromWishlistIcon: React.FC<IconProps> = ({ onClick }) => <IconImg onClick={onClick} src="https://img.icons8.com/color/96/hearts.png" />
