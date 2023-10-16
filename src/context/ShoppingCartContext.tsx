import { createContext, useContext, useState } from "react";

import { Product } from "../data/";


type ProviderProps = { children: React.ReactNode };

export type CartContextType = {

  getItemQuantity: (id: number) => number;
  increaseCartItemQuantity: (id: number) => void;
  decreaseCartItemQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
  cartQuantity: number;
  cartItems: Product[];
  isWishlist: (id: number) => boolean;
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
wishlist: Product[];

};

const CartContext = createContext({} as CartContextType);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: ProviderProps) {
  
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
 

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (!currItems.find((item: Product) => item.id === id)) {
        return [...currItems, { id, quantity: 1, price: 0 }];
      }

      return currItems.map((item) => {
        if (item.id === id) {
          console.log(cartItems);

          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    });
  }

  function decreaseCartItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item: Product) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: Product) => item.id !== id);
      }

      return currItems.map((item: Product) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });
    });
  }

  function removeCartItem(id: number) {
    setCartItems((currItems) =>
      currItems.filter((item: Product) => item.id !== id)
    );
  }

  function isWishlist(id: number) {
    return !!wishlist.find((item) => item.id === id);
  }

  function addToWishlist(id: number) {
    if (!wishlist.find((item:any) => item.id === id)) {
      setWishlist([...wishlist, { id, quantity: 1, price:0 }]);
    }
  }

  function removeFromWishlist(id: number) {
    setWishlist((currentWishlist) => currentWishlist.filter((item) => item.id !== id));
  }


  return (
    <CartContext.Provider
      value={{
        wishlist,
        getItemQuantity,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
        removeCartItem,
        isWishlist,
        addToWishlist,
        removeFromWishlist,
        cartItems,
        cartQuantity,
  
      }}
    >
      {children}
   
    </CartContext.Provider>
  );
}
