import React from 'react';
import Text from '@Atoms/Text';
import { InputContainer, Container } from './styles';

interface Iprops extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input(props: Iprops) {
  return (
    <Container>
      <Text size="small" font="regular" type="span">
        {props.label}
      </Text>

      <InputContainer>
        <input {...props} />
      </InputContainer>
    </Container>
  );
}

export default Input;
