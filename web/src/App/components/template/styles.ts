import styled from 'styled-components';

export const Container = styled('section')`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 36px;
  position: relative;
`;

export const Section = styled('section')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 2300px;
`;

export const Header = styled('header')`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 8px;
    }
  }
`;

export const Content = styled('section')`
  width: 100%;
  height: 100%;
  margin-top: 48px;
`;
