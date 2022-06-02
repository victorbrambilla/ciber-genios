import React from 'react';
import { Button as Btn } from './styles';
interface props {
  text: string;
  darkBg?: boolean;
}
export const Button = ({ text, darkBg }: props) => {
  return <Btn darkBg={darkBg}>{text}</Btn>;
};
