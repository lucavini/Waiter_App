import { useState } from 'react';

import Text from '@Components/atomic/atoms/Text';
import Modal from '@Components/atomic/organisms/Modal';
import OrderModal from '@Pages/Home/OrderModal';

import { useTheme } from 'styled-components';
import { Board, OrdersContainer } from './styles';

interface IOrdersProps {
  title: string;
  icon: string;
  orders: models.Order[];
}

function OrdersBoard({ title, icon, orders }: IOrdersProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] =
    useState<models.Order | null>(null);

  const theme = useTheme();

  function handleOpenModal(order: models.Order) {
    setIsModalVisible((prevState) => !prevState);
    setSelectedOrder(order);
  }

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
          <button
            onClick={() => handleOpenModal(order)}
            key={order._id}
            type="button"
          >
            <Text type="span" font="semibold">
              Mesa {order.table}
            </Text>

            <Text type="span" color={theme.gray.main} font="thin">
              {order.products.length} itens
            </Text>
          </button>
        ))}
      </OrdersContainer>

      {selectedOrder && (
        <Modal
          title={`Mesa ${selectedOrder?.table}`}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
        >
          <OrderModal selectedOrder={selectedOrder} />
        </Modal>
      )}
    </Board>
  );
}

export default OrdersBoard;
