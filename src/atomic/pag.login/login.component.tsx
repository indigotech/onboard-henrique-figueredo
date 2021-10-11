import React, { useState } from 'react';

import { AtomLabel } from '../atm.label/label.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { MoleculeButton } from '../mol.button/button.component';
import { MoleculeNamedInput } from '../mol.named-input/named-input.component';

import { StylePageLoginContainer } from './login.component.style';

export const PageLogin: React.FC = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmailValue = (value: string) => {
    setEmail(value);
  };

  const changePasswordValue = (value: string) => {
    setPassword(value);
  };

  const validadeForm = () => {
    if (!email || !password) {
      return setError('Email e senha não deve ficar vazio');
    }

    const regexEmail = /^[\w-.]+@([\w-]+\.com)$/g;
    const isValidEmail = regexEmail.test(email);
    if (!isValidEmail) {
      return setError('O email não é válido');
    }

    const regexPassword = /^(?=.*[0-9])(?=.*[A-Z]).{7,}$/;
    const isValidPassword = regexPassword.test(password);

    if (!isValidPassword) {
      return setError('A senha não é valida. \n\
Certifique-se de que tem pelo menos 1 letra maiúscula e uma minúscula');
    }
  };

  return (
    <StylePageLoginContainer>
      <AtomSeparator size={'2-xl'} />
      <AtomTitle>Bem vindo(a) à Taqtitle!</AtomTitle>
      <AtomLabel color="error">{error}</AtomLabel>
      <AtomSeparator size={'2-xl'} />
      <MoleculeNamedInput value={email} onInputChange={changeEmailValue}>
        Email
      </MoleculeNamedInput>
      <AtomSeparator size={'2-xl'} />
      <MoleculeNamedInput secureTextEntry value={password} onInputChange={changePasswordValue}>
        Password
      </MoleculeNamedInput>
      <AtomSeparator size={'2-xl'} />
      <MoleculeButton title="Entrar" color="callToAction" onPress={validadeForm} />
    </StylePageLoginContainer>
  );
};
