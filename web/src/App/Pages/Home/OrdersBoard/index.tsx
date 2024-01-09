import Text from '@Components/atomic/atoms/Text';
import { useTheme } from 'styled-components';
import { Board, OrdersContainer } from './styles';

interface IOrdersProps {
  title: string;
  icon: string;
  orders: models.Order[];
}

function OrdersBoard({ title, icon, orders }: IOrdersProps) {
  const theme = useTheme();

  return (
    <Board>
      <header>
        <Text type="span">{icon}</Text>
        <Text type="span" font="bold">
          {title}
        </Text>
        <Text type="span">({orders.length})</Text>
      </header>

      <OrdersContainer>
        {orders.map((order) => (
          <button key={order._id} type="button">
            <Text type="span" font="semibold">
              Mesa {order.table}
            </Text>

            <Text type="span" color={theme.gray.main} font="thin">
              {order.products.length} itens
            </Text>
          </button>
        ))}
      </OrdersContainer>
    </Board>
  );
}

export default OrdersBoard;
