import React from 'react';
import { ButtomComponent, IButtomProps } from './styles';

type Iprops = IButtomProps & React.ButtonHTMLAttributes<HTMLButtonElement>

function Buttom(props: Iprops) {
  return <ButtomComponent {...props}>{props.children}</ButtomComponent>;
}

export default Buttom;
