import React from 'react';

import { StyleSeparator } from './separator.component.style';

export type SeparatorSize = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
interface AtomSeparatorProps {
  size: SeparatorSize;
}

export const AtomSeparator: React.FC<AtomSeparatorProps> = ({ size }) => {
  return <StyleSeparator size={size} />;
};
