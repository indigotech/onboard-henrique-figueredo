import React, { useCallback, useState } from 'react';

import { useQuery } from '@apollo/client';

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
  const { refetch } = useQuery<UsersData, PaginateVariable>(Query.GetUsers, {
    variables: { data: { offset: 10 * pageCount, limit: 10 } },
    onCompleted: data => {
      setUsers(oldUsers => [...oldUsers, ...data.users.nodes]);
    },
    onError: error => {
      setMessage({ text: error.message, error: true });
    },
  });

  const nextPage = useCallback(() => {
    setPageCount(oldPage => oldPage + 1);
    refetch();
  }, [refetch]);

  return (
    <GlobalStyle>
      <PageUserList users={users} message={message} nextPage={nextPage} />
    </GlobalStyle>
  );
};
