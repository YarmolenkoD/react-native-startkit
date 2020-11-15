import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

interface Props {
  small?: boolean;
  light?: boolean;
  margin?: boolean;
  center?: boolean;
  theme: DefaultTheme;
}

export const Title = styled.Text`
  margin: ${(props: Props) => (props.margin ? '10px 0' : '0')};
  font-size: ${(props: Props) => (props.small ? '18px' : '22px')};
  font-family: space-mono;
  font-weight: bold;
  text-align: ${(props: Props) => (props.center ? 'center' : 'left')};
  color: ${({ theme: { colors }, light }: Props) => (light ? colors.lightText : colors.text)};
`;

export const Text = styled.Text`
  margin: ${(props: Props) => (props.margin ? '15px 0' : '0')};
  font-size: ${(props: Props) => (props.small ? '14px' : '16px')};
  font-family: space-mono;
  font-weight: bold;
  text-align: ${(props: Props) => (props.center ? 'center' : 'left')};
  color: ${({ theme: { colors }, light }: Props) => (light ? colors.lightText : colors.text)};
`;
