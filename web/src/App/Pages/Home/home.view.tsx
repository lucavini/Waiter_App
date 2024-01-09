import { Container } from './home.styles';
import OrdersBoard from './OrdersBoard';

const orders: models.Order[] = [
  {
    _id: '64715ba674cc7ada8240c45e',
    table: '3',
    status: 'IN_PRODUCTION',
    products: [
      {
        product: {
          _id: '647147aea8454eb0796d1d05',
          name: 'Coca-cola',
          description: 'Coca de 1L',
          imagePath: '1685145518846-coca-cola.png',
          price: 30,
          ingredients: [],
          category: '646a39bb268f5bc63eae9534',
        },
        quantity: 2,
      },
      {
        product: {
          _id: '646d7ac77ba308f9628d8f35',
          name: 'Pizza',
          description: 'Pizza de 4 queijos com borda',
          imagePath: '1684896455124-quatro-queijos.png',
          price: 40.5,
          ingredients: [
            {
              name: 'mussarela',
              icon: '🧀',
              _id: '646d7ac77ba308f9628d8f36',
            },
            {
              name: 'parmessão',
              icon: '🧀',
              _id: '646d7ac77ba308f9628d8f37',
            },
            {
              name: 'cheedar',
              icon: '🧀',
              _id: '646d7ac77ba308f9628d8f38',
            },
            {
              name: 'suiço',
              icon: '🧀',
              _id: '646d7ac77ba308f9628d8f39',
            },
          ],
          category: '646a38044f9afd024e144889',
        },
        quantity: 3,
      },
    ],
  },
];

function Home() {
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="Fila de Espera" orders={[]} />
      <OrdersBoard icon="👨‍🍳" title="Em Preparação" orders={orders} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]} />
    </Container>
  );
}

export default Home;
