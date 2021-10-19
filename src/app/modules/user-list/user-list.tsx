import React, { useCallback, useEffect, useState } from 'react';

import { useLazyQuery } from '@apollo/client';

import { PageUserList } from '../../../atomic/pag.user-list/user-list.component';
import { GlobalStyle } from '../../../themes/global';
import { Query } from '../../data/graphql/graphql.schemas';

interface PaginateVariable {
  data: {
    limit: number;
    offset: number;
  };
}

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
  const [pageCount, setPageCount] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [getUsers] = useLazyQuery<UsersData, PaginateVariable>(Query.GetUsers, {
    variables: { data: { offset: 10 * pageCount, limit: 10 } },
    onCompleted: data => {
      setUsers(oldUsers => [...oldUsers, ...data.users.nodes]);
    },
    onError: error => {
      setMessage({ text: error.message, error: true });
    },
  });

  useEffect(() => {
    getUsers();
  }, [pageCount, getUsers]);

  const nextPage = useCallback(() => {
    setPageCount(oldPage => oldPage + 1);
  }, []);

  return (
    <GlobalStyle>
      <PageUserList users={users} message={message} nextPage={nextPage} />
    </GlobalStyle>
  );
};
