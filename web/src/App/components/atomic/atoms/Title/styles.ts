import styled, { css } from 'styled-components';

export type ItextProps = {
  color?: string;
};

export const H1 = styled('h1')<ItextProps>`
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  ${({ color }) => css`
    color: ${({ theme }) => color || theme.gray.dark};
  `}
`;
