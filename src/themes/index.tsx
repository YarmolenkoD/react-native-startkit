export const themes = {
  dark: {
    colors: {
      text: '#ffffff',
      background: '#222831',
      primary: '#34626c',
      secondary: '#839b97',
      border: '#cfd3ce',
      buttonText: '#fff',
    }
  },
  light: {
    colors: {
      text: '#0A0A0A',
      background: '#FFF',
      primary: '#9ad3bc',
      secondary: '#f3eac2',
      border: '#ec524b',
      buttonText: '#fff',
    }
  },
}

export type Theme = {
  colors: {
    text: string,
    background: string,
    primary: string,
    secondary: string,
    border: string,
    buttonText: string,
  }
}
