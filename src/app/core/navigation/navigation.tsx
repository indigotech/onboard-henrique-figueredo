import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PageAddUser } from '../../../atomic/pag.add-user/add-user.component';
import { ScreenLogin } from '../../modules/login/login';
import { ScreenUserDetail } from '../../modules/user-detail/user-detail';
import { ScreenUserList } from '../../modules/user-list/user-list';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ title: '' }} initialRouteName="login">
      <Stack.Screen name="user-list" component={ScreenUserList} />
      <Stack.Screen name="user-detail" component={ScreenUserDetail} />
      <Stack.Screen name="login" component={ScreenLogin} />
      <Stack.Screen name="add-user" component={PageAddUser} />
    </Stack.Navigator>
  </NavigationContainer>
);
