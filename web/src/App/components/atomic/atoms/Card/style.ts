import styled, { css } from 'styled-components';

export type ICardProps = {
  backgroundColor?: string;
  borderColor?: string;
};

export const Container = styled('div')<ICardProps>`
  width: fit-content;
  height: fit-content;
  min-width: 50px;
  min-height: 50px;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 2px 2px 20px rgba(204, 204, 204, 0.4);

  ${({ backgroundColor }) => css`
    background: ${({ theme }) => backgroundColor || theme.plain.light};
  `}

  ${({ borderColor }) => css`
    border-color: ${ borderColor || ''};
  `}
`;
