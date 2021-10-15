import React from 'react';

import { NativeRouter, Route } from 'react-router-native';

import { Dummy } from '../../modules/dummy/dummy';
import { ScreenLogin } from '../../modules/login/login';

export const Navigation = () => (
  <NativeRouter>
    <Route path="/dummy" component={Dummy} />
    <Route exact path="/" component={ScreenLogin} />
  </NativeRouter>
);
