import styled, { css } from 'styled-components';

export type ItextProps = {
  size?: 'small' | 'medium' | 'large';
  font?: 'regular' | 'thin' | 'bold' | 'semibold';
  color?: string;
};

const textSizeVariants = {
  small: css`
    font-size: 14px;
  `,
  medium: css`
    font-size: 16px;
  `,
  large: css`
    font-size: 18px;
  `,
};

const textFontVariants = {
  thin: css`
    font-weight: 300;
  `,
  regular: css`
    font-weight: 400;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

export const TextComponent = styled('p')<ItextProps>`
  font-weight: 400;
  line-height: 150%;
  ${({ color }) => css`
    color: ${({ theme }) => color || theme.gray.dark};
  `}
  ${({ size }) => textSizeVariants[size ?? 'medium']}
  ${({ font }) => textFontVariants[font ?? 'regular']}
`;

export const SpanComponent = styled('span')<ItextProps>`
  font-weight: 400;
  line-height: 120%;
  ${({ color }) => css`
    color: ${({ theme }) => color || theme.gray.dark};
  `}
  ${({ font }) => textFontVariants[font ?? 'regular']}
`;
