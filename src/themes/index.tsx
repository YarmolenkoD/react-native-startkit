import { DefaultTheme } from 'styled-components';

const commonThemeFields = {
  borderRadius: 8,
  paddingHorizontal: 30,
  paddingVertical: 50,
};

type Themes = {
  dark: DefaultTheme,
  light: DefaultTheme,
};

export const themes: Themes = {
  dark: {
    ...commonThemeFields,
    linearGradient: ['45deg', '#1D3475', '#060D1F'],
    colors: {
      text: '#ffffff',
      lightText: '#ffffff',
      background: '#222831',
      primary: '#34626c',
      secondary: '#839b97',
      border: '#cfd3ce',
      buttonText: '#fff',
      darkButtonText: '#0A0A0A',
      error: '#d72b35',
    }
  },
  light: {
    ...commonThemeFields,
    linearGradient: ['45deg', '#9ad3bc', '#b3d2c7'],
    colors: {
      text: '#0A0A0A',
      lightText: '#ffffff',
      background: '#FFF',
      primary: '#9ad3bc',
      secondary: '#f3eac2',
      border: '#ec524b',
      buttonText: '#fff',
      darkButtonText: '#0A0A0A',
      error: '#d72b35',
    }
  }
};
