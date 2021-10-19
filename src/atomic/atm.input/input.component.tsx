import React from 'react';

import { StyleInput } from './input.component.style';

interface AtomInputProps {
  value: string;
  onInputChange(value: string): void;
  secureTextEntry?: boolean;
  placeholder?: string;
}
export const AtomInput: React.FC<AtomInputProps> = ({ value, onInputChange, secureTextEntry, placeholder }) => {
  return (
    <StyleInput
      placeholder={placeholder}
      value={value}
      onChangeText={onInputChange}
      secureTextEntry={secureTextEntry}
    />
  );
};
