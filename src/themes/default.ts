import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  title: 'default',
  font: {
    size: {
      h1: '32px',
      h2: '24px',
      h5: '13.28px',
    },
    colors: {
      primary: '#c1c1c1',
      secondary: '#000',
      callToAction: '#fff',
      error: '#F44336',
    },
  },
  spacing: {
    sm: '6px',
    md: '12px',
    lg: '24px',
    '2-xl': '32px',
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
