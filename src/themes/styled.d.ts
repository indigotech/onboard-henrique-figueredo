import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    font: {
      size: {
        h1: string;
        h2: string;
        h5: string;
      };
      colors: {
        primary: string;
        secondary: string;
        callToAction: string;
        error: string;
      };
    };
    spacing: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xlg: string;
      'xlg-2': string;
    };
    border: {
      size: {
        sm: string;
      };
      radius: {
        sm: string;
        md: string;
      };
    };
    colors: { primary: string; callToAction: string };
  }
}
