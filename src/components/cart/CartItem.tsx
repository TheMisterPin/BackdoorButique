import { Card, Skeleton, Avatar } from "antd";
import { currencyFormat } from "../../Utils/currencyHandler";
import { useCart } from "../../context/ShoppingCartContext";
import { CartItemType } from "../../data/Types/CartTypes";

type CartItemProps = CartItemType & {
  isLoading: boolean;
};

export function CartItem({
  id,
  quantity,
  image,
  title,
  price,
  isLoading,
}: CartItemProps) {
  const { removeCartItem } = useCart();

  return (
    <Card
      style={{ width: 300, marginTop: 16, height: 200 }}
      actions={[
      
       <img onClick={ () => removeCartItem(id) } width="50" height="50" src="https://img.icons8.com/plasticine/100/delete-forever.png" alt="delete-forever"/>
     
      ]}
    >
      <Skeleton loading={isLoading} avatar active>
        <Card.Meta style={{fontFamily:"Permanent Marker", fontSize: "1rem"}}
          avatar={<Avatar src={image || ""} />}
          title={`${title} (x${quantity})`}
          description={`${currencyFormat(price)} Total: ${currencyFormat(
            price * quantity
          )}` }
        />
      </Skeleton>
    </Card>
  );
}
