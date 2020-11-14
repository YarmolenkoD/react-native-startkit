import styled from 'styled-components/native';

import { Theme } from '../themes';

interface Props {
  small?: boolean;
  margin?: boolean;
  theme: Theme;
}

export const Title = styled.Text`
  margin: ${(props: Props) => (props.margin ? '10px 0' : '0')};
  font-size: ${(props: Props) => (props.small ? '18px' : '22px')};
  font-weight: bold;
  color: ${(props: Props) => (props.theme.colors.text)};
`;

export const Text = styled.Text`
  margin: ${(props: Props) => (props.margin ? '15px 0' : '0')};
  font-size: ${(props: Props) => (props.small ? '14px' : '16px')};
  font-weight: bold;
  color: ${(props: Props) => (props.theme.colors.text)};
`;
