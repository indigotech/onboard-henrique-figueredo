import React from 'react';

import { StyleUserCard } from './user-card.component.style';

export const UserCard: React.FC = ({ children }) => {
  return <StyleUserCard>{children}</StyleUserCard>;
};
