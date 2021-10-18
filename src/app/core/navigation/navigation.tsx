import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dummy } from '../../modules/dummy/dummy';
import { ScreenLogin } from '../../modules/login/login';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
      <Stack.Screen name="dummy" component={Dummy} />
      <Stack.Screen name="login" component={ScreenLogin} />
    </Stack.Navigator>
  </NavigationContainer>
);
