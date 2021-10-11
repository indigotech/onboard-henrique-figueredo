import React from 'react';

import { StyleSeparator } from './separator.component.style';

type Size = 'sm' | 'md' | 'lg' | '2-xl';
interface Props {
  size: Size;
}

export const AtomSeparator: React.FC<Props> = ({ size }) => {
  return <StyleSeparator size={size} />;
};
