import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHistory } from 'react-router';

import { PageLogin } from '../../../atomic/pag.login/login.component';
import { Mutation } from '../../data/graphql/graphql.schemas';

interface LoginData {
  login: { token: string };
}

export const ScreenLogin: React.FC = () => {
  const [message, setMessage] = useState({ text: '', error: false });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const [runLogin] = useMutation<LoginData>(Mutation.Login, {
    variables: { data: { email, password } },
    onCompleted: async data => {
      const token = data.login.token;
      if (!token) {
        return setMessage({ text: 'Houve um problema ao processar o login', error: true });
      }
      await AsyncStorage.setItem('@token', token);
      setMessage({ text: 'Logado com sucesso!', error: false });

      history.push('/dummy');
    },
    onError: error => setMessage({ text: error.message, error: true }),
  });

  const changeEmailValue = (value: string) => {
    setEmail(value);
  };

  const changePasswordValue = (value: string) => {
    setPassword(value);
  };

  const validadeForm = () => {
    if (!email || !password) {
      return setMessage({ text: 'Email e senha não deve ficar vazio', error: true });
    }

    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const isValidEmail = regexEmail.test(email);
    if (!isValidEmail) {
      return setMessage({ text: 'O email não é válido', error: true });
    }

    const regexPassword = /^(?=.*[0-9])(?=.*[A-Z]).{7,}$/;
    const isValidPassword = regexPassword.test(password);

    if (!isValidPassword) {
      return setMessage({
        text: 'A senha não é valida. \n\
Certifique-se de que tem pelo menos 1 letra maiúscula e uma minúscula',
        error: true,
      });
    }
  };

  const submitLogin = async () => {
    await runLogin();
  };

  return (
    <PageLogin
      email={email}
      password={password}
      changeEmailValue={changeEmailValue}
      changePasswordValue={changePasswordValue}
      submitLogin={submitLogin}
      message={message}
    />
  );
};
