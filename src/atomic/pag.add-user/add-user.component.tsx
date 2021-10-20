import React, { useRef, useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { PageWrapper } from '../../themes/global';
import { AtomLabel } from '../atm.label/label.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { MoleculeButton } from '../mol.button/button.component';
import { MoleculeNamedInput } from '../mol.named-input/named-input.component';

interface Props {
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  password: string;
  role: string;
  changeName(newName: string): void;
  changeEmail(newEmail: string): void;
  changePhone(newPhone: string): void;
  changeBirthDate(newBirthDate: Date): void;
  changePassword(newPassword: string): void;
  changeRole(newRole: string): void;
  submitUser(): Promise<void>;
  message: { text: string; error: boolean };
  loading: boolean;
}

export const PageAddUser: React.FC<Props> = ({
  name,
  email,
  phone,
  birthDate,
  role,
  password,
  changeName,
  changeEmail,
  changePhone,
  changeBirthDate,
  changePassword,
  changeRole,
  submitUser,
  message,
  loading,
}) => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const scrollRef = useRef<ScrollView | null>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <ScrollView ref={scrollRef}>
      <PageWrapper>
        <AtomSeparator size={'xlg'} />
        <AtomTitle title="Adicionar usuário" />

        <AtomSeparator size={'md'} />
        <AtomLabel text={message.text} color={message.error ? 'error' : 'callToAction'} />

        <AtomSeparator size={'md'} />
        <MoleculeNamedInput text="Nome" placeholder="Ex: Joao" value={name} onInputChange={changeName} />

        <AtomSeparator size={'xlg'} />
        <MoleculeNamedInput
          text="Email"
          placeholder="Ex: eu@taqtile.com.br"
          value={email}
          onInputChange={changeEmail}
        />

        <AtomSeparator size={'xlg'} />
        <MoleculeNamedInput placeholder="Ex: 11988884444" text="Telefone" value={phone} onInputChange={changePhone} />

        <AtomSeparator size={'xlg'} />
        <MoleculeButton title="Data de nascimento" color="primary" onPress={() => setIsDateOpen(true)} />
        <DatePicker
          modal
          mode="date"
          locale="pt-Br"
          is24hourSource="locale"
          open={isDateOpen}
          date={birthDate}
          maximumDate={new Date()}
          onDateChange={changeBirthDate}
          onConfirm={() => {
            setIsDateOpen(false);
          }}
          onCancel={() => setIsDateOpen(false)}
        />

        <AtomSeparator size={'xlg'} />
        <MoleculeNamedInput text="Senha" secureTextEntry value={password} onInputChange={changePassword} />

        <AtomSeparator size={'xlg'} />
        <Picker selectedValue={role} onValueChange={changeRole}>
          <Picker.Item label="User" value={'user'} />
          <Picker.Item label="Admin" value={'admin'} />
        </Picker>

        <AtomSeparator size={'xlg'} />
        <MoleculeButton
          loading={loading}
          title="Adicionar"
          color="callToAction"
          onPress={() => submitUser().then(() => scrollToTop())}
        />
      </PageWrapper>
    </ScrollView>
  );
};
