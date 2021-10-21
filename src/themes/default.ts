import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  title: 'default',
  font: {
    size: {
      h1: '24px',
      h2: '16px',
      h5: '12px',
    },
    colors: {
      primary: '#c1c1c1',
      secondary: '#000',
      callToAction: '#fff',
      error: '#F44336',
    },
  },
  spacing: {
    xsm: '6px',
    sm: '8px',
    md: '12px',
    lg: '20px',
    xlg: '32px',
    'xlg-2': '44px',
  },
  border: {
    size: { sm: '12px' },
    radius: { sm: '4px', md: '12px' },
  },
  colors: {
    primary: '#2C2C2C',
    callToAction: '#6658e9',
  },
};
