import React from 'react';

import { StyleText } from './label.component.style';

type Color = 'primary' | 'secondary' | 'callToAction' | 'error';

interface Props {
  color: Color;
}

export const AtomLabel: React.FC<Props> = ({ children, color }) => {
  return <StyleText color={color}>{children}</StyleText>;
};
