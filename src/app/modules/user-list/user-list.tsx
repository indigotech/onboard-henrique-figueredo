import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { PageUserList } from '../../../atomic/pag.user-list/user-list.component';
import { GlobalStyle } from '../../../themes/global';
import { Query } from '../../data/graphql/graphql.schemas';

interface User {
  name: string;
  email: string;
  id: string;
}
interface UsersData {
  users: {
    nodes: User[];
  };
}

export const ScreenUserList: React.FC = () => {
  const [message, setMessage] = useState({ text: '', error: false });
  const [users, setUsers] = useState<User[]>([]);
  const { error, loading, data } = useQuery<UsersData>(Query.GetUsers, {});

  useEffect(() => {
    if (error) {
      return setMessage({ text: error.message, error: true });
    }

    if (!loading && data) {
      setUsers(data.users.nodes);
    }
  }, [loading, data, error]);

  return (
    <GlobalStyle>
      <PageUserList users={users} message={message} />
    </GlobalStyle>
  );
};
