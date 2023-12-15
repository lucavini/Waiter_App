import React from 'react';
import { H2 } from './styles';

type IProps = {
  children: React.ReactNode;
  color?: string;
};

function Subtitle({ children, color }: IProps) {
  return <H2 color={color}>{children}</H2>;
}

export default Subtitle;
