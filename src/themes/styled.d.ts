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
      sm: string;
      md: string;
      lg: string;
      '2-xl': string;
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
