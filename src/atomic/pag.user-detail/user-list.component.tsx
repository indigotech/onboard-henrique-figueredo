import React from 'react';

import { AtomLabel } from '../atm.label/label.component';
import { AtomSeparator } from '../atm.separator/separator.component';
import { AtomTitle } from '../atm.title/title.component';
import { UserCard } from '../mol.user-card/user-card.component';

interface PageUserListProps {
  message: { text: string; error: boolean };
}

export const PageUserDetail: React.FC<PageUserListProps> = ({ message }) => {
  return (
    <>
      <AtomTitle title="Detalhes do usuário" />
      <AtomSeparator size="sm" />

      <AtomLabel text={message.text} color={message.error ? 'error' : 'primary'} />

      <UserCard>
        <AtomTitle title={'ID: 1'} />
        <AtomSeparator size="sm" />

        <AtomTitle title={'Nome: Joao'} />
        <AtomSeparator size="sm" />

        <AtomTitle title={'Telefone: 43966668888'} />
        <AtomSeparator size="sm" />

        <AtomTitle title={'Data de Nascimento: 22/03/2003'} />
        <AtomSeparator size="sm" />

        <AtomTitle title={'Email: 22/03/2003'} />
        <AtomSeparator size="sm" />

        <AtomTitle title={'Role: admin'} />
        <AtomSeparator size="sm" />
      </UserCard>
    </>
  );
};
