import React from 'react';

import { ScrollView } from 'react-native';

import { AtomLabel } from '../atm.label/label.component';
import { PlusFab } from '../atm.plus-fab/plus-fab.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { MoleculeButton } from '../mol.button/button.component';

import { StylePageUserListContainer, StyleUserCard } from './user-list.component.style';

interface User {
  name: string;
  email: string;
  id: string;
}

interface PageUserListProps {
  users: User[];
  message: { text: string; error: boolean };
  nextPage(): void;
}

export const PageUserList: React.FC<PageUserListProps> = ({ users, message, nextPage }) => {
  return (
    <StylePageUserListContainer>
      <AtomTitle title="Lista de usuários" />
      <AtomSeparator size="sm" />

      <AtomLabel text={message.text} color={message.error ? 'error' : 'primary'} />
      <ScrollView>
        {users.map(user => (
          <StyleUserCard key={+user.id}>
            <AtomLabel text={`Nome: ${user.name}`} color="secondary" />
            <AtomLabel text={`Email: ${user.email}`} color="secondary" />
          </StyleUserCard>
        ))}

        <AtomSeparator size="sm" />
        <MoleculeButton title="Next Page" color="primary" onPress={nextPage} />
        <AtomSeparator size="xlg" />
      </ScrollView>
      <PlusFab />
    </StylePageUserListContainer>
  );
};
