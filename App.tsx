import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { ScreenLogin } from './src/app/modules/login/login';
import { client } from './src/configs/apolloclient';
import { light } from './src/themes/default';

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={light}>
        <ScreenLogin />
      </ThemeProvider>
    </ApolloProvider>
  );
};
export default App;
