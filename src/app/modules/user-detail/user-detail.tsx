import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';

import { AtomLoading } from '../../../atomic/atm.loading/loading.component';
import { PageUserDetail } from '../../../atomic/pag.user-detail/user-list.component';
import { PageWrapper } from '../../../themes/global';
import { RouteUserDetailProps } from '../../core/navigation/screen-props';
import { Query } from '../../data/graphql/graphql.schemas';
interface UserData {
  user: { id: string; name: string; phone: string; birthDate: string; email: string; role: string };
}
interface GetUserVariables {
  id: number;
}
export const ScreenUserDetail: React.FC = () => {
  const { params } = useRoute<RouteUserDetailProps>();
  const { data, loading, error } = useQuery<UserData, GetUserVariables>(Query.GetUser, {
    variables: { id: params?.userId },
  });
  console.log(data);
  return <PageWrapper>{loading ? <AtomLoading /> : <PageUserDetail user={data?.user} error={error} />}</PageWrapper>;
};
