import React from 'react';
import { SpanComponent, TextComponent, ItextProps } from './styles';

type IProps = ItextProps & {
  type?: 'p' | 'span';
  children: React.ReactNode;
  color?: string;
};

function Text({
  children,
  size = 'medium',
  font = 'regular',
  type = 'p',
  color,
}: IProps) {
  if (type === 'span') {
    return (
      <SpanComponent size={size} font={font} color={color}>
        {children}
      </SpanComponent>
    );
  }

  return (
    <TextComponent size={size} font={font} color={color}>
      {children}
    </TextComponent>
  );
}

export default Text;
