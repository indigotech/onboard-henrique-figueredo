/// <reference path="../../declarations.ts" />

import AddUser from './mutation/add-user.mutation.graphql';
import Login from './mutation/login.mutation.graphql';
import GetUser from './query/get-user.query.graphql';
import GetUsers from './query/get-users.query.graphql';

export const Mutation = {
  Login,
  AddUser,
};

export const Query = {
  GetUser,
  GetUsers,
};
