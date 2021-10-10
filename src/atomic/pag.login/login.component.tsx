import React from 'react';

import { useTheme } from 'styled-components';

import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { MoleculeCallToActionButton } from '../mol.button/button.component';
import { MoleculeNamedInput } from '../mol.named-input/named-input.component';

import { StylePageLoginContainer } from './login.component.style';

export const PageLogin: React.FC = () => {
  const { spacing, colors } = useTheme();
  return (
    <StylePageLoginContainer>
      <AtomSeparator size={spacing['2-xl']} />
      <AtomTitle>Bem vindo(a) à Taqtitle!</AtomTitle>
      <AtomSeparator size={spacing['2-xl']} />
      <MoleculeNamedInput>Email</MoleculeNamedInput>
      <AtomSeparator size={spacing['2-xl']} />
      <MoleculeNamedInput>Password</MoleculeNamedInput>
      <AtomSeparator size={spacing['2-xl']} />
      <MoleculeCallToActionButton title="Entrar" color={colors.purple[400]} onPress={() => {}} />
    </StylePageLoginContainer>
  );
};
