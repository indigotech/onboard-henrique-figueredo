import React from 'react';

import { StyleSeparatorContainer } from './separator.component.style';

interface Props {
  size: string;
}

export const AtomSeparator: React.FC<Props> = ({ size }) => {
  return <StyleSeparatorContainer size={size} />;
};
