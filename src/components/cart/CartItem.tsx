import { Card, Skeleton, Avatar } from 'antd';
import { currencyFormat } from "../../Utils/currencyHandler";
import { useCart } from "../../context/ShoppingCartContext";
import { CartItemType } from '../../data/Types/CartTypes';

type CartItemProps = CartItemType & {
  isLoading: boolean;
}

export function CartItem({ id, quantity, image, title, price, isLoading }: CartItemProps) {
  const { removeCartItem } = useCart();

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <button className="btn btn-danger" onClick={() => removeCartItem(id)} key="remove">Remove</button>,
      ]}
    >
      <Skeleton loading={isLoading} avatar active>
        <Card.Meta
          avatar={<Avatar src={image || ""} />}
          title={`${title} (x${quantity})`}
          description={`${currencyFormat(price)} Total: ${currencyFormat(price * quantity)}`}
        />
      </Skeleton>
    </Card>
  );
}