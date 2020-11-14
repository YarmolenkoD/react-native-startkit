import styled from 'styled-components/native';

import { Theme } from '../themes';

interface Props {
  small?: boolean;
  theme: Theme;
}

export const Title = styled.Text`
  font-size: ${(props: Props) => (props.small ? '18px' : '22px')};
  font-weight: bold;
  color: ${(props: Props) => props.theme.colors.text};
`;

export const Text = styled.Text`
  font-size: ${(props: Props) => (props.small ? '14px' : '16px')};
  font-weight: bold;
  color: ${(props: Props) => props.theme.colors.text};
`;

export const ButtonText = styled.Text`
  font-size: ${(props: Props) => (props.small ? '14px' : '16px')};
  font-weight: bold;
  color: ${(props: Props) => props.theme.colors.buttonText};
`;
