import { createContext, useContext, useState } from "react";
import { Cart } from "../components/Index";
import { Product } from '../data/';




type ProviderProps = { children: React.ReactNode };

export type CartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartItemQuantity: (id: number) => void;
  decreaseCartItemQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
  cartQuantity: number;
  cartItems: Product[];
  // isWishlist: (id: number) => boolean;
  // addToWishlist: (id: number) => void;
  // removeFromWishlist: (id: number) => void;
  // isWishlistOpen: boolean;
  // openWishlist: () => void;
  // closeWishlist: () => void;
  isCartOpen?: boolean;
};



const CartContext = createContext({} as CartContextType);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: ProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

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
        return [ ...currItems,{ id, quantity: 1, price:0,}];
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
      if (currItems.find((item:Product) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: Product) => item.id !== id);
      }

      return currItems.map((item:Product) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  }

  function removeCartItem(id: number) {
    setCartItems((currItems) => currItems.filter((item: Product) => item.id !== id));
  }

  // function isWishlist(id: number) {
  //   return !!wishlist.find((item) => item.id === id);
  // }

  // function addToWishlist(id: number) {
  //   if (!wishlist.find((item:any) => item.id === id)) {
  //     setWishlist([...wishlist, { id, quantity: 1 }]);
  //   }
  // }

  // function removeFromWishlist(id: number) {
  //   setWishlist((currentWishlist) => currentWishlist.filter((item) => item.id !== id));
  // }

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }



  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
        removeCartItem,
        // isWishlist,
        // addToWishlist,
        // removeFromWishlist,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        // isWishlistOpen,
        // openWishlist,
        // closeWishlist,
      }}
    >
      {children}
      <Cart />
      
    </CartContext.Provider>
  );
}