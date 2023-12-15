import styled, { css } from 'styled-components';

export type IButtomProps = {
  danger?: boolean;
  width?: number;
  height?: number;
  radius?: number;
  background?: string;
  variation?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'smallPrimary'
    | 'smallSecondary';
};

const DangerVariations = {
  primary: css`
    background: ${({ theme }) => theme.danger};
    border: 2px solid ${({ theme }) => theme.danger};

    &:hover {
      background: ${({ theme }) => theme.danger};
    }

    &:active {
      background: ${({ theme }) => theme.danger};
    }
  `,

  secondary: css`
    border: 2px solid ${({ theme }) => theme.danger};
    color: ${({ theme }) => theme.danger};
    background: transparent;

    &:hover {
      background: ${({ theme }) => theme.danger};
      color: ${({ theme }) => theme.plain.light};
    }
  `,

  tertiary: css`
    background: none;
    width: fit-content;
    height: fit-content;
    padding: 0;
    color: ${({ theme }) => theme.danger};
  `,

  smallPrimary: css`
    font-size: 12px;
    width: 100px;
    height: 30px;
    padding: 14px 5px;
    background: ${({ theme }) => theme.danger};
    border: 2px solid ${({ theme }) => theme.danger};

    &:hover {
      background: ${({ theme }) => theme.danger};
    }

    &:active {
      background: ${({ theme }) => theme.danger};
    }
  `,

  smallSecondary: css`
    font-size: 12px;
    width: 100px;
    height: 30px;
    padding: 14px 5px;
    border: 2px solid ${({ theme }) => theme.danger};
    color: ${({ theme }) => theme.danger};
    background: transparent;

    &:hover {
      background: ${({ theme }) => theme.danger};
      color: ${({ theme }) => theme.plain.light};
    }
  `,
};

const PrimaryVariations = {
  primary: css`
    background: ${({ theme }) => theme.primary.main};

    &:hover {
      background: ${({ theme }) => theme.primary.light};
    }

    &:active {
      background: ${({ theme }) => theme.primary.dark};
    }
  `,

  secondary: css`
    border: 2px solid ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.primary.main};
    background: transparent;

    &:hover {
      background: ${({ theme }) => theme.primary.main};
      color: ${({ theme }) => theme.plain.light};
    }

    &:active {
      background: ${({ theme }) => theme.primary.dark};
    }
  `,

  tertiary: css`
    background: none;
    width: fit-content;
    height: fit-content;
    padding: 0;
    color: ${({ theme }) => theme.primary.main};
  `,

  smallPrimary: css`
    font-size: 12px;
    width: 100px;
    height: 30px;
    padding: 14px 5px;
    background: ${({ theme }) => theme.primary.main};

    &:hover {
      background: ${({ theme }) => theme.primary.light};
    }

    &:active {
      background: ${({ theme }) => theme.primary.dark};
    }
  `,

  smallSecondary: css`
    font-size: 12px;
    width: 100px;
    height: 30px;
    padding: 14px 5px;
    border: 2px solid ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.primary.main};
    background: transparent;

    &:hover {
      background: ${({ theme }) => theme.primary.main};
      color: ${({ theme }) => theme.plain.light};
    }

    &:active {
      background: ${({ theme }) => theme.primary.dark};
    }
  `,
};

export const ButtomComponent = styled('button')<IButtomProps>`
  max-width: 330px;
  min-width: 50px;
  padding: 14px 28px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in;
  font-size: 16px;
  font-weight: 600;

  ${({ width }) => css`
    width: ${width ? `${width}px` : `${100}%`};
  `}

  ${({ height }) => css`
    height: ${height ? `${height}px` : `${44}px`};
  `}
  
  ${({ radius }) => css`
    border-radius: ${radius ? `${radius}px` : `${44}px`};
  `}

  color: ${({ theme }) => theme.plain.light};
  ${({ variation }) => PrimaryVariations[variation ?? 'primary']}

  ${({ danger, variation }) => {
    if (
      danger &&
      (variation === 'primary' || variation === undefined)
    ) {
      return DangerVariations['primary'];
    }
    if (danger && variation === 'secondary') {
      return DangerVariations['secondary'];
    }
    if (danger && variation === 'tertiary') {
      return DangerVariations['tertiary'];
    }
    if (danger && variation === 'smallPrimary') {
      return DangerVariations['smallPrimary'];
    }
    if (danger && variation === 'smallSecondary') {
      return DangerVariations['smallSecondary'];
    }
  }}

  ${({ background }) => css`
    background: ${background ? background : null};
  `}

  &[disabled] {
    background: #ccc !important;
    cursor: default !important;
  }
`;
