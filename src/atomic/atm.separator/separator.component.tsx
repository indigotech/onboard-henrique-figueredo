import React from 'react';

import { StyleSeparator } from './separator.component.style';

export type SeparatorSize = 'sm' | 'md' | 'lg' | 'xlg';
interface Props {
  size: SeparatorSize;
}

export const AtomSeparator: React.FC<Props> = ({ size }) => {
  return <StyleSeparator size={size} />;
};
