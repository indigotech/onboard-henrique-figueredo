import React from 'react';

import { useTheme } from 'styled-components';

import { AtomInput } from '../atm.input/input.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomSubText } from '../atm.subtext/subtext.component';

import { MoleculeNamedInputContainer } from './named-input.component.style';

export const MoleculeNamedInput: React.FC = ({ children }) => {
  const { spacing } = useTheme();
  return (
    <MoleculeNamedInputContainer>
      <AtomSubText>{children}</AtomSubText>
      <AtomSeparator size={spacing.sm} />
      <AtomInput />
    </MoleculeNamedInputContainer>
  );
};
