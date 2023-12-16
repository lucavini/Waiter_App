import { Container, MenuNavigation, Buttom } from './styles';

import logo from '@Assets/images/logo_small.svg';
import { ReactComponent as Home } from '@Assets/icons/home.svg';
import { ReactComponent as Order } from '@Assets/icons/order.svg';
import { ReactComponent as Menu } from '@Assets/icons/menu.svg';
import { ReactComponent as Users } from '@Assets/icons/group.svg';
import { ReactComponent as Profile } from '@Assets/icons/profile.svg';
import { ReactComponent as LogOff } from '@Assets/icons/log-off.svg';

function LateralMenu() {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <MenuNavigation>
        <Buttom to="/">
          <Home />
          Home
        </Buttom>

        <Buttom to="/ergret">
          <Order />
          Histórico
        </Buttom>

        <Buttom to="/erg">
          <Menu />
          Cardápio
        </Buttom>

        <Buttom to="/egrr">
          <Users />
          Usuários
        </Buttom>
      </MenuNavigation>

      <MenuNavigation>
        <Buttom to="/egrr">
          <Profile />
          Meu Perfil
        </Buttom>
        
        <Buttom to="/egrr">
          <LogOff />
          Sair
        </Buttom>
      </MenuNavigation>
    </Container>
  );
}

export default LateralMenu;
