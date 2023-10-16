import React from 'react';

type WishlistItemProps = {
  id: number;
  title: string;
  removeFromWishlist: (id: number) => void;
};

export const WishlistItem: React.FC<WishlistItemProps> = ({ id, title, removeFromWishlist }) => {
  return (
    <div className="wishlist-item">
      <span>{title}</span>
      <button onClick={() => removeFromWishlist(id)}>Remove</button>
    </div>
  );
};