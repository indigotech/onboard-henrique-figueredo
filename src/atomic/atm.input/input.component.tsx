import React from 'react';

import { StyleInput } from './input.component.style';

interface AtomInputProps {
  value: string;
  onInputChange(value: string): void;
  secureTextEntry?: boolean;
}
export const AtomInput: React.FC<AtomInputProps> = ({ value, onInputChange, secureTextEntry }) => {
  return <StyleInput value={value} onChangeText={onInputChange} secureTextEntry={secureTextEntry} />;
};
