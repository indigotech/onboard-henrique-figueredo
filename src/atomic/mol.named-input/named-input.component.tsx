import React from 'react';

import { AtomInput } from '../atm.input/input.component';
import { AtomLabel } from '../atm.label/label.component';
import { AtomSeparator } from '../atm.separator/separator.component';

import { StyleMoleculeNamedInputContainer } from './named-input.component.style';

interface MoleculeNamedInputProps {
  text: string;
  value: string;
  onInputChange(value: string): void;
  secureTextEntry?: boolean;
  placeholder?: string;
}

export const MoleculeNamedInput: React.FC<MoleculeNamedInputProps> = ({
  text,
  value,
  onInputChange,
  secureTextEntry,
  placeholder,
}) => {
  return (
    <StyleMoleculeNamedInputContainer>
      <AtomLabel text={text} color="secondary" />

      <AtomSeparator size="sm" />

      <AtomInput
        placeholder={placeholder}
        value={value}
        onInputChange={onInputChange}
        secureTextEntry={secureTextEntry}
      />
    </StyleMoleculeNamedInputContainer>
  );
};
