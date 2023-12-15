import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      light: string;
      main: string;
      dark: string;
    };

    gray: {
      light: string;
      main: string;
      dark: string;
    };

    plain: {
      light: string;
      main: string;
      dark: string;
    };

    background: string;

    danger: string;

    success: string;
  }
}
