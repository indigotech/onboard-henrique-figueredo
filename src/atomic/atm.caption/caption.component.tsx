import React from 'react';

import { StyleCaption } from './caption.component.style';

type Color = 'primary' | 'secondary' | 'callToAction' | 'error';

interface AtomLabelProps {
  text: string;
  color: Color;
}

export const AtomCaption: React.FC<AtomLabelProps> = ({ text, color }) => {
  return <StyleCaption color={color}>{text}</StyleCaption>;
};
