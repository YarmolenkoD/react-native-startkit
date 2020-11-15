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
  width: 100%;
  margin-bottom: 15px;
  border-radius: ${(props: Props) => `${props.theme.borderRadius}px`};
  overflow: hidden;
`;

export const Text = styled.Text`
  font-size: ${(props: TextProps) => (props.small ? '14px' : '16px')};
  font-weight: bold;
  color: ${({ dark, theme }: TextProps) => {
    if (dark) {
      return theme.colors.darkButtonText
    }
    return theme.colors.buttonText
  }};
`;
