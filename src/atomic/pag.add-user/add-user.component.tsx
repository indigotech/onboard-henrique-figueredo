import React, { useRef, useState } from 'react';

import { useMutation } from '@apollo/client';
import { Picker } from '@react-native-picker/picker';
import { format } from 'date-fns';
import { ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { Mutation } from '../../app/data/graphql/graphql.schemas';
import { isValidEmail, isValidName, isValidPassword, isValidPhone } from '../../app/utils/validations';
import { PageWrapper } from '../../themes/global';
import { AtomLabel } from '../atm.label/label.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { MoleculeButton } from '../mol.button/button.component';
import { MoleculeNamedInput } from '../mol.named-input/named-input.component';

type Role = 'admin' | 'user';
interface AddUserVariables {
  data: { name: string; email: string; phone: string; birthDate: string; password: string; role: string };
}
interface AddUserData {
  createUser: {
    email: string;
  };
}

export const PageAddUser: React.FC = () => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const scrollRef = useRef<ScrollView | null>(null);
  const [message, setMessage] = useState({ text: '', error: false });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('user');
  const [addUser, { loading }] = useMutation<AddUserData, AddUserVariables>(Mutation.AddUser, {
    onCompleted: async data => {
      setMessage({ text: `Usuário ${data.createUser.email} criado com sucesso`, error: false });
    },
    onError: error => setMessage({ text: error.message, error: true }),
  });

  const validateForm = () => {
    if (!name || !email || !phone || !birthDate || !password || !role) {
      return setMessage({ text: 'Por favor preencha todos os campos', error: true });
    }

    if (!isValidName(name)) {
      return setMessage({ text: 'O nome deve ser preenchido com somente letras', error: true });
    }

    if (!isValidEmail(name)) {
      return setMessage({ text: 'O email não é válido', error: true });
    }

    if (!isValidPhone(phone) || phone.length !== 11) {
      return setMessage({ text: 'O telefone deve conter apenas números e ter no máximo 11 caracteres', error: true });
    }

    if (!isValidPassword(password)) {
      return setMessage({
        text: 'A senha não é valida. \n\
Certifique-se de que tem pelo menos 1 letra maiúscula e uma minúscula',
        error: true,
      });
    }

    return true;
  };

  const submitUser = async () => {
    const validate = validateForm();
    if (validate) {
      await addUser({
        variables: { data: { name, email, phone, birthDate: format(birthDate, 'yyyy-MM-dd'), password, role } },
      });
    }
  };

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
        <MoleculeNamedInput text="Nome" placeholder="Ex: Joao" value={name} onInputChange={input => setName(input)} />

        <AtomSeparator size={'xlg'} />
        <MoleculeNamedInput
          text="Email"
          placeholder="Ex: eu@taqtile.com.br"
          value={email}
          onInputChange={newEmail => setEmail(newEmail)}
        />

        <AtomSeparator size={'xlg'} />
        <MoleculeNamedInput
          placeholder="Ex: 11988884444"
          text="Telefone"
          value={phone}
          onInputChange={newPhone => setPhone(newPhone)}
        />

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
          onDateChange={newBirthDate => setBirthDate(newBirthDate)}
          onConfirm={() => {
            setIsDateOpen(false);
          }}
          onCancel={() => setIsDateOpen(false)}
        />

        <AtomSeparator size={'xlg'} />
        <MoleculeNamedInput
          placeholder="Ex: #S3nh4"
          text="Senha"
          secureTextEntry
          value={password}
          onInputChange={newPassword => setPassword(newPassword)}
        />

        <AtomSeparator size={'xlg'} />
        <Picker selectedValue={role} onValueChange={newRole => setRole(newRole)}>
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
