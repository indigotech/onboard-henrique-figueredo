import React from 'react';

import { AtomCaption } from '../atm.caption/caption.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { MoleculeButton } from '../mol.button/button.component';
import { MoleculeNamedInput } from '../mol.named-input/named-input.component';

interface PageLoginProps {
  email: string;
  password: string;
  changeEmailValue(newEmail: string): void;
  changePasswordValue(newPassword: string): void;
  submitLogin(): void;
  message: { text: string; error: boolean };
  loading: boolean;
}

export const PageLogin: React.FC<PageLoginProps> = ({
  email,
  password,
  changeEmailValue,
  changePasswordValue,
  submitLogin,
  message,
  loading,
}) => {
  return (
    <>
      <AtomSeparator size={'xlg'} />
      <AtomTitle title="Bem vindo(a) à Taqtitle!" />

      <AtomCaption text={message.text} color={message.error ? 'error' : 'callToAction'} />

      <MoleculeNamedInput text="Email" value={email} onInputChange={changeEmailValue} />
      <AtomSeparator size={'xlg'} />

      <MoleculeNamedInput text="Password" secureTextEntry value={password} onInputChange={changePasswordValue} />
      <AtomSeparator size={'xlg'} />

      <MoleculeButton loading={loading} title="Entrar" color="callToAction" onPress={submitLogin} />
    </>
  );
};
