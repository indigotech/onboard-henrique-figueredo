import React from 'react';

import { AtomLoading } from '../atm.loading/loading.component';

import { StyleButton, StyleButtonText } from './button.component.style';

interface MoleculeButtonProps {
  title: string;
  color: 'primary' | 'callToAction';
  onPress(): void;
  loading?: boolean;
}

export const MoleculeButton: React.FC<MoleculeButtonProps> = ({ loading, title, color, onPress }) => {
  return (
    <StyleButton disabled={loading} color={color} onPress={onPress}>
      {loading ? <AtomLoading /> : null}
      <StyleButtonText>{title}</StyleButtonText>
    </StyleButton>
  );
};
