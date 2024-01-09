import Template from '@Components/template';
import HomeView from './home.view';

import { ReactComponent as HomeIcon } from '@Assets/icons/home.svg';

function Home() {
  return (
    <Template
      title="Home"
      subtitle="Acompanhe os pedidos dos clientes"
      Icon={HomeIcon}
    >
      <HomeView />
    </Template>
  );
}

export default Home;
