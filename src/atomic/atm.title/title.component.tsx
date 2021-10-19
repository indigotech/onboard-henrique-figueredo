import React from 'react';

import { StyleTitle } from './title.component.style';

interface AtomTitleProps {
  title: string;
}

export const AtomTitle: React.FC<AtomTitleProps> = ({ title }) => {
  return <StyleTitle>{title}</StyleTitle>;
};
