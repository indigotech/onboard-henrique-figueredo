import React from 'react';

import { StyleTitle } from './title.component.style';

interface Props {
  title: string;
}

export const AtomTitle: React.FC<Props> = ({ title }) => {
  return <StyleTitle>{title}</StyleTitle>;
};
