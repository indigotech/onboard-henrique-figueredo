import React from 'react';

import { ThemeProvider } from 'styled-components';

import { ScreenLogin } from './src/screens/login';
import { light } from './src/themes/default';

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={light}>
      <ScreenLogin />
    </ThemeProvider>
  );
};
export default App;
