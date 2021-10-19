import React, { useCallback, useState } from 'react';

import { useQuery } from '@apollo/client';
import { useLinkTo } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useTheme } from 'styled-components';

import { PageUserList } from '../../../atomic/pag.user-list/user-list.component';
import { PageWrapper } from '../../../themes/global';
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
  const linkTo = useLinkTo();
  const theme = useTheme();
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
    <PageWrapper>
      <FAB
        style={
          StyleSheet.create({
            fab: {
              position: 'absolute',
              marginRight: 10,
              marginBottom: 36,
              right: 0,
              bottom: 0,
            },
          }).fab
        }
        small
        icon="plus"
        onPress={() => linkTo('/add-user')}
        color={theme.colors.callToAction}
      />
      <PageUserList users={users} message={message} nextPage={nextPage} />
    </PageWrapper>
  );
};
