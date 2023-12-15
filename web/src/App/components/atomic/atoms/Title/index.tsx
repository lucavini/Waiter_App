import React from 'react';
import { H1 } from './styles';

type IProps = {
  children: React.ReactNode;
  color?: string;
};

function Title({ children, color }: IProps) {
  return <H1 color={color}>{children}</H1>;
}

export default Title;
