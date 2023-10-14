import { createContext, useContext, useState } from "react";
import { Cart } from "../components/Index";

type ProviderProps = { children: React.ReactNode };
export type CartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartItemQuantity: (id: number) => void;
  decreaseCartItemQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

export type CartItem = {
  id: number;
  quantity: number;
  price?: number;
};

const CartContext = createContext({} as CartContextType);


export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: ProviderProps) {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );


  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item: CartItem) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      }

      return currItems.map((item: CartItem) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    });
  }

  function decreaseCartItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item: CartItem) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: CartItem) => item.id !== id);
      }

      return currItems.map((item: CartItem) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });
    });
  }

  function removeCartItem(id: number) {
    setCartItems((currItems) =>
      currItems.filter((item: CartItem) => item.id !== id)
    );
  }
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

        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <Cart isCartOpen={isCartOpen} />
    </CartContext.Provider>
  );
}
