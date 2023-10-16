import React from 'react';
import { useCart } from '../../context/ShoppingCartContext';

type WishlistIconProps = {
  id: number;
};

export const AddToWishlistIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <img onClick={onClick} src="https://img.icons8.com/office/40/like--v2.png" alt="Add to wishlist" />
);

export const RemoveFromWishlistIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <img onClick={onClick} src="https://img.icons8.com/office/40/hearts.png" alt="Remove from wishlist" />
);

export const WishlistIcon: React.FC<WishlistIconProps> = ({ id }) => {
  const { isWishlist, addToWishlist, removeFromWishlist } = useCart();

  const isInWishlist = isWishlist(id);

  const toggleWishlist  = () => {
    if (isInWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
    }
  };

  return (
    <>
      {isInWishlist ? (
        <RemoveFromWishlistIcon onClick={toggleWishlist} />
      ) : (
        <AddToWishlistIcon onClick={toggleWishlist} />
      )}
    </>
  );
};