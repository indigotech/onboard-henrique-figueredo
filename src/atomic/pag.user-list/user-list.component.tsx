import React from 'react';

import { ScrollView } from 'react-native';

import { AtomLabel } from '../atm.label/label.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';

import { StylePageUserListContainer, StyleUserCard } from './user-list.component.style';

interface User {
  name: string;
  email: string;
  id: string;
}

interface Props {
  users: User[];
  message: { text: string; error: boolean };
}

export const PageUserList: React.FC<Props> = ({ users, message }) => {
  return (
    <StylePageUserListContainer>
      <AtomTitle title="Lista de usuários" />
      <AtomSeparator size="sm" />

      <AtomLabel text={message.text} color={message.error ? 'error' : 'primary'} />
      <ScrollView>
        {users.map(user => (
          <StyleUserCard key={user.id}>
            <AtomLabel text={`Nome: ${user.name}`} color="secondary" />
            <AtomLabel text={`Email: ${user.email}`} color="secondary" />
          </StyleUserCard>
        ))}
      </ScrollView>
    </StylePageUserListContainer>
  );
};
