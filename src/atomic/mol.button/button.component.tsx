import React from 'react';

import { StyleCallToActionButton, StyleCallToActionButtonText } from './button.component.style';

interface Props {
  title: string;
  color: string;
  onPress(): void;
}

export const MoleculeCallToActionButton: React.FC<Props> = ({ title, color, onPress }) => {
  return (
    <StyleCallToActionButton color={color} onPress={onPress}>
      <StyleCallToActionButtonText>{title}</StyleCallToActionButtonText>
    </StyleCallToActionButton>
  );
};
