import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

interface TextProps extends Props {
  small?: boolean;
  dark?: boolean;
  style?: {
    background: string
  };
}

export const Button = styled.TouchableOpacity`
  margin-bottom: 15px;
`;
