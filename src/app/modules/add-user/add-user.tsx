import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { format } from 'date-fns';

import { PageAddUser } from '../../../atomic/pag.add-user/add-user.component';
import { Mutation } from '../../data/graphql/graphql.schemas';
import { Regex } from '../../utils/regex';

interface AddUserVariables {
  data: { name: string; email: string; phone: string; birthDate: string; password: string; role: string };
}
interface AddUserData {
  createUser: {
    email: string;
  };
}

export const ScreenAddUser = () => {
  const [message, setMessage] = useState({ text: '', error: false });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [addUser, { loading }] = useMutation<AddUserData, AddUserVariables>(Mutation.AddUser, {
    onCompleted: async data => {
      setMessage({ text: `Usuário ${data.createUser.email} criado com sucesso`, error: false });
    },
    onError: error => setMessage({ text: error.message, error: true }),
  });

  const changeName = (newName: string) => {
    setName(newName);
  };

  const changeEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const changePhone = (newPhone: string) => {
    setPhone(newPhone);
  };

  const changeBirthDate = (newBirthDate: Date) => {
    setBirthDate(newBirthDate);
  };

  const changePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const changeRole = (newRole: string) => {
    setRole(newRole);
  };

  const validateForm = () => {
    if (!name || !email || !phone || !birthDate || !password || !role) {
      return setMessage({ text: 'Por favor preencha todos os campos', error: true });
    }

    const notOnlyLetter = Regex.onlyLetter.test(name);
    if (notOnlyLetter) {
      return setMessage({ text: 'O nome deve ser preenchido com somente letras', error: true });
    }

    const isValidEmail = Regex.email.test(email);
    if (!isValidEmail) {
      return setMessage({ text: 'O email não é válido', error: true });
    }

    const notOnlyDigits = Regex.onlyDigits.test(phone);
    if (notOnlyDigits || phone.length !== 11) {
      return setMessage({ text: 'O telefone deve conter apenas números e ter no máximo 11 caracteres', error: true });
    }

    const isValidPassword = Regex.password.test(password);
    if (!isValidPassword) {
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

  return (
    <PageAddUser
      name={name}
      email={email}
      phone={phone}
      birthDate={birthDate}
      role={role}
      password={password}
      changeName={changeName}
      changeEmail={changeEmail}
      changePhone={changePhone}
      changeBirthDate={changeBirthDate}
      changePassword={changePassword}
      changeRole={changeRole}
      submitUser={submitUser}
      message={message}
      loading={loading}
    />
  );
};
