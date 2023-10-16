
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../context'; 
import { WishlistItem } from './WishlistItem';

export const OffCanvasWishlist: React.FC = () => {
  const [show, setShow] = useState(false);
  const { wishlist, removeFromWishlist } = useCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Show Wishlist
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Wishlist</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {wishlist.length > 0 ? (
            <ul>
              {wishlist.map((item) => (
                <WishlistItem
                  key={item.id}
                  {...item}
                  removeFromWishlist={removeFromWishlist}
                />
              ))}
            </ul>
          ) : (
            <p>Your wishlist is empty</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};