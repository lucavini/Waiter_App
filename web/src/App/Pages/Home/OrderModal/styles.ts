import styled from 'styled-components';

export const Container = styled('div')`
  width: 480px;
  max-height: 500px;

  header {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`;

export const Content = styled('div')`
  margin-top: 32px;
`;

export const Price = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const ScrollItens = styled('div')`
  max-height: 300px;
  overflow-y: auto;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const Item = styled('div')`
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 100%;
  margin-bottom: 16px;
`;

export const Image = styled('div')`
  width: 50px;
  height: 40px;
  background: gray;
  border-radius: 5px;
`;

export const Info = styled('div')``;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

    &[disabled] {
      cursor: not-allowed;
    }
`;
