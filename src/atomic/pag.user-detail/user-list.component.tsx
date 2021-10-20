import React from 'react';

import { ApolloError } from '@apollo/client';

import { AtomLabel } from '../atm.label/label.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { UserCard } from '../mol.user-card/user-card.component';

interface User {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  email: string;
  role: string;
}
interface PageUserListProps {
  user?: User;
  error?: ApolloError;
}

export const PageUserDetail: React.FC<PageUserListProps> = ({ user, error }) => {
  return (
    <>
      <AtomTitle title="Detalhes do usuário" />
      <AtomSeparator size="sm" />

      <AtomLabel text={error ? error.message : ''} color={'error'} />

      {user && (
        <UserCard>
          <AtomLabel text={`ID: ${user.id}`} color={'secondary'} />
          <AtomSeparator size="sm" />

          <AtomLabel text={`Nome: ${user.name}`} color={'secondary'} />
          <AtomSeparator size="sm" />

          <AtomLabel text={`Telefone: ${user.phone}`} color={'secondary'} />
          <AtomSeparator size="sm" />

          <AtomLabel text={`Data de Nascimento: ${user.birthDate}`} color={'secondary'} />
          <AtomSeparator size="sm" />

          <AtomLabel text={`Email: ${user.email}`} color={'secondary'} />
          <AtomSeparator size="sm" />

          <AtomLabel text={`Role: ${user.role}`} color={'secondary'} />
          <AtomSeparator size="sm" />
        </UserCard>
      )}
    </>
  );
};
