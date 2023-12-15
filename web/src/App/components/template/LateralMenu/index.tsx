import { Container, MenuNavigation, Buttom } from './styles';

import logo from '@Assets/images/logo_small.svg';
import { ReactComponent as Home } from '@Assets/icons/home.svg';

function LateralMenu() {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <MenuNavigation>
        <Buttom to="/">
          <Home />
          Home
        </Buttom>
      </MenuNavigation>
    </Container>
  );
}

export default LateralMenu;
