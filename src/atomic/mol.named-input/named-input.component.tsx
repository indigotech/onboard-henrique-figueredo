import React from 'react';

import { AtomInput } from '../atm.input/input.component';
import { AtomLabel } from '../atm.label/label.component';
import { AtomSeparator } from '../atm.separator/separator.component';

import { MoleculeNamedInputContainer } from './named-input.component.style';

interface Props {
  value: string;
  onInputChange(value: string): void;
  secureTextEntry?: boolean;
}

export const MoleculeNamedInput: React.FC<Props> = ({ children, value, onInputChange, secureTextEntry }) => {
  return (
    <MoleculeNamedInputContainer>
      <AtomLabel color="secondary">{children}</AtomLabel>

      <AtomSeparator size="sm" />

      <AtomInput value={value} onInputChange={onInputChange} secureTextEntry={secureTextEntry} />
    </MoleculeNamedInputContainer>
  );
};
