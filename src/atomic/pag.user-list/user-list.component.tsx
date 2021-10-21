import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';

import { NavigationUserDetailProps } from '../../app/core/navigation/screen-props';
import { User } from '../../type/user';
import { AtomLabel } from '../atm.label/label.component';
import { PlusFab } from '../atm.plus-fab/plus-fab.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { MoleculeButton } from '../mol.button/button.component';
import { UserCard } from '../mol.user-card/user-card.component';

import { StylePageUserListContainer } from './user-list.component.style';

type MinUser = Pick<User, 'name' | 'email' | 'id'>;

interface PageUserListProps {
  users: MinUser[];
  message: { text: string; error: boolean };
  nextPage(): void;
}

export const PageUserList: React.FC<PageUserListProps> = ({ users, message, nextPage }) => {
  const { navigate } = useNavigation<NavigationUserDetailProps>();
  return (
    <StylePageUserListContainer>
      <AtomTitle title="Lista de usuários" />
      <AtomSeparator size="sm" />

      <AtomLabel text={message.text} color={message.error ? 'error' : 'primary'} />
      <ScrollView>
        {users.map(user => (
          <TouchableOpacity onPress={() => navigate('user-detail', { userId: +user.id })}>
            <UserCard key={+user.id}>
              <AtomLabel text={`Nome: ${user.name}`} color="secondary" />
              <AtomLabel text={`Email: ${user.email}`} color="secondary" />
            </UserCard>
          </TouchableOpacity>
        ))}

        <AtomSeparator size="sm" />
        <MoleculeButton title="Next Page" color="primary" onPress={nextPage} />
        <AtomSeparator size="xlg" />
      </ScrollView>
      <PlusFab />
    </StylePageUserListContainer>
  );
};
