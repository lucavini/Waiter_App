import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled('nav')`
  width: 108px;
  height: 100vh;

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 20px 0px;

  background: ${({ theme }) => theme.plain.light};
  box-shadow: 10px 0px 32px rgba(204, 204, 204, 0.2);
`;

export const MenuNavigation = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Buttom = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;
  text-decoration: none;
  color: ${({ theme }) => theme.gray.main};

  svg {
    stroke: ${({ theme }) => theme.gray.main};
    width: 24px;
    height: 24px;
  }

  &.active {
    color: ${({ theme }) => theme.primary.main};
    svg {
      stroke: ${({ theme }) => theme.primary.main};
    }
  }
`;
