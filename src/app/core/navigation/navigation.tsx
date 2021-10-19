import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenLogin } from '../../modules/login/login';
import { ScreenUserList } from '../../modules/user-list/user-list';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
      <Stack.Screen name="user-list" component={ScreenUserList} />
      <Stack.Screen name="login" component={ScreenLogin} />
    </Stack.Navigator>
  </NavigationContainer>
);
