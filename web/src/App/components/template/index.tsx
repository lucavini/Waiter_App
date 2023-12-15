import React from 'react';

import Title from '@Atoms/Title';
import SubTitle from '@Atoms/Subtitle';
import LateralMenu from './LateralMenu';

import { Container, Section, Header, Content } from './styles';

type IProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

function Template({ children, title, subtitle, Icon }: IProps) {
  return (
    <>
      <LateralMenu />
      <Container>
        <Section>
          <Header>
            <div>
              <Icon stroke="#333333" />
              <Title>{title}</Title>
            </div>
            <SubTitle>{subtitle}</SubTitle>
          </Header>

          <Content>{children}</Content>
        </Section>
      </Container>
    </>
  );
}

export default Template;
