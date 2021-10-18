import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { Navigation } from './src/app/core/navigation/navigation';
import { client } from './src/configs/apollo-client';
import { light } from './src/themes/default';

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={light}>
        <Navigation />
      </ThemeProvider>
    </ApolloProvider>
  );
};
export default App;
