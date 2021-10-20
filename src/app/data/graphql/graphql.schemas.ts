/// <reference path="../../declarations.ts" />

import AddUser from './mutation/add-user.mutation.graphql';
import Login from './mutation/login.mutation.graphql';
import GetUsers from './query/get-users.query.graphql';

export const Mutation = {
  Login,
  AddUser,
};

export const Query = {
  GetUsers,
};
