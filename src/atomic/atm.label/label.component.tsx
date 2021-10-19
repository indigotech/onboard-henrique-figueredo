import React from 'react';

import { StyleText } from './label.component.style';

type Color = 'primary' | 'secondary' | 'callToAction' | 'error';

interface AtomLabelProps {
  text: string;
  color: Color;
}

export const AtomLabel: React.FC<AtomLabelProps> = ({ text, color }) => {
  return <StyleText color={color}>{text}</StyleText>;
};
