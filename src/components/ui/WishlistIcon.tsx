import React from 'react';
import { useCart } from '../../context/ShoppingCartContext';

type WishlistIconProps = {
  productId: number;
};

export const AddToWishlistIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <img onClick={onClick} src="https://img.icons8.com/stickers/100/love-letter.png" alt="Add to wishlist" />
);

export const RemoveFromWishlistIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <img onClick={onClick} src="https://img.icons8.com/color/96/hearts.png" alt="Remove from wishlist" />
);

export const WishlistIcon: React.FC<WishlistIconProps> = ({ productId }) => {
  const { isWishlist, addToWishlist, removeFromWishlist } = useCart();

  const isInWishlist = isWishlist(productId);

  const handleClick = () => {
    if (isInWishlist) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <>
      {isInWishlist ? (
        <RemoveFromWishlistIcon onClick={handleClick} />
      ) : (
        <AddToWishlistIcon onClick={handleClick} />
      )}
    </>
  );
};