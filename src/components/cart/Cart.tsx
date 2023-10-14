
import { Button, Dropdown, Menu } from 'antd';
import { useCart } from "../../context/ShoppingCartContext";
type CartProps = {
  isCartOpen: boolean;

};

export function Cart({isCartOpen}:CartProps)  {
  const { 
    cartItems, 

    openCart, 
    closeCart 
  } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price ? item.price : 0) * item.quantity, 0);

  const dropdownMenu = (
    <Menu>
      <Menu.ItemGroup title={`Total: ${total}`} key="total">
        <Button type="primary" block>
          Checkout
        </Button>
      </Menu.ItemGroup>
      {cartItems.map(item => (
        <Menu.Item key={item.id}>
          {`${item.id} (x${item.quantity}) - Total: ${item.price ? item.price : 0 * item.quantity}`}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <Button onClick={() => isCartOpen ? closeCart() : openCart()}>
        Cart ({cartItems.length})
      </Button>
      {isCartOpen && dropdownMenu}
    </div>
  );
};
