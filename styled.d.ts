// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number;
    paddingVertical: number;
    paddingHorizontal: number;
    linearGradient: string[];
    colors: {
      text: string,
      lightText: string,
      background: string,
      primary: string,
      secondary: string,
      border: string,
      buttonText: string,
      darkButtonText: string,
      error: string,
    };
  }
}
