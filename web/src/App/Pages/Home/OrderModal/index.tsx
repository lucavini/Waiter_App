import Text from '@Components/atomic/atoms/Text';
import { Status } from '~Shared/Models/Enums';

import {
  Container,
  Content,
  Footer,
  Image,
  Info,
  Item,
  Price,
  ScrollItens,
} from './styles';
import { useTheme } from 'styled-components';
import { Currency } from '~Shared/Utils/CurrencyFormat';
import Button from '@Components/atomic/atoms/Buttom';

interface IOrderModalProps {
  selectedOrder: models.Order;
}

function OrderModal({ selectedOrder }: IOrderModalProps) {
  const color = useTheme();

  const total = selectedOrder.products.reduce(
    (sum, { product, quantity }) => {
      return sum + product.price * quantity;
    },
    0,
  );

  return (
    <Container>
      <header>
        <Text type="p" font="thin" size="small">
          Status do Pedido
        </Text>
        <Text type="p" font="semibold">
          {selectedOrder.status === Status.WAITING &&
            '⏱️ Fila de Espera'}
          {selectedOrder.status === Status.IN_PRODUCTION &&
            '👨‍🍳 Em Preparação'}
          {selectedOrder.status === Status.DONE && '✅ Pronto'}
        </Text>
      </header>

      <Content>
        <Text
          type="p"
          font="regular"
          size="large"
          color={color.gray.main}
        >
          Itens
        </Text>

        <ScrollItens>
          {selectedOrder.products.map(({ product, quantity }) => (
            <Item key={product._id}>
              <Image></Image>

              <Text
                type="p"
                font="regular"
                size="large"
                color={color.gray.light}
              >
                {`${quantity}x`}
              </Text>
              <Info>
                <Text type="p" font="bold" size="large">
                  {product.name}
                </Text>
                <Text type="p" font="thin" size="medium">
                  {Currency.format(product.price)}
                </Text>
              </Info>
            </Item>
          ))}
        </ScrollItens>

        <Price>
          <Text
            type="p"
            font="regular"
            size="large"
            color={color.gray.main}
          >
            Total
          </Text>

          <Text type="p" font="semibold" size="large">
            {Currency.format(total)}
          </Text>
        </Price>

        <Footer>
          <div>
            <Button variation="tertiary">Cancelar Pedido</Button>
          </div>

          <div>
            <Button
              disabled={selectedOrder.status === Status.DONE}
            >
              {selectedOrder.status === Status.WAITING && 'Iniciar Produção'}
              {selectedOrder.status === Status.IN_PRODUCTION && 'Finalizar Pedido'}
              {selectedOrder.status === Status.DONE && 'Pedido Finalizado'}
            </Button>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}

export default OrderModal;
