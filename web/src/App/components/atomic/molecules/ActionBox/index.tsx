import React from 'react';

import Buttom from '@Atoms/Buttom';
import SubTitle from '@Atoms/Subtitle';

import { Container, HeaderAction, Content } from './style';

type IProps = {
  children: React.ReactNode;
  title?: string;
  buttomText?: string;
  onClickAction?: () => void;
};

function ActionBox({ title, children, buttomText, onClickAction }: IProps) {
  return (
    <Container>
      <HeaderAction>
        <div>{title && <SubTitle>{title}</SubTitle>}</div>
        <div>
          {onClickAction && buttomText && (
            <Buttom onClick={onClickAction} variation="tertiary">
              {buttomText}
            </Buttom>
          )}
        </div>
      </HeaderAction>
      <Content>{children}</Content>
    </Container>
  );
}

export default ActionBox;
