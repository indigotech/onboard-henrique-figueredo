import React from 'react';

import { AtomLabel } from '../atm.label/label.component';
import { AtomTitle } from '../atm.title/title.component';

import { StylePageUserListContainer, StyleUserCard } from './user-list.component.style';

export const PageUserList = () => {
  return (
    <StylePageUserListContainer>
      <AtomTitle title="Lista de usuários" />
      <StyleUserCard>
        <AtomLabel text="Nome: Henrique" color="secondary" />
        <AtomLabel text="email: henrique@email.com" color="secondary" />
      </StyleUserCard>
      <StyleUserCard>
        <AtomLabel text="Nome: Henrique" color="secondary" />
        <AtomLabel text="email: henrique@email.com" color="secondary" />
      </StyleUserCard>
      <StyleUserCard>
        <AtomLabel text="Nome: Henrique" color="secondary" />
        <AtomLabel text="email: henrique@email.com" color="secondary" />
      </StyleUserCard>
      <StyleUserCard>
        <AtomLabel text="Nome: Henrique" color="secondary" />
        <AtomLabel text="email: henrique@email.com" color="secondary" />
      </StyleUserCard>
    </StylePageUserListContainer>
  );
};
