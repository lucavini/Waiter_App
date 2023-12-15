import React from 'react';
import { Container } from './style';

type IProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
};

function Card(props : IProps) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  );
}

export default Card;
