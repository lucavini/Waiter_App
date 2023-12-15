import styled, { css } from 'styled-components';

export type ItextProps = {
  color?: string;
};

export const H2 = styled('h2')<ItextProps>`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  ${({ color }) => css`
    color: ${({ theme }) => color || theme.gray.main};
  `}
`;
