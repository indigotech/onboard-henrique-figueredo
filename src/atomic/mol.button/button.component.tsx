import React from 'react';

import { StyleButton, StyleButtonText } from './button.component.style';

interface Props {
  title: string;
  color: string;
  onPress(): void;
}

export const MoleculeButton: React.FC<Props> = ({ title, color, onPress }) => {
  return (
    <StyleButton color={color} onPress={onPress}>
      <StyleButtonText>{title}</StyleButtonText>
    </StyleButton>
  );
};
