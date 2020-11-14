import styled from 'styled-components/native';
import { Theme } from '../../themes';

interface Props {
  small?: Theme;
  theme: Theme;
}

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-radius: 8px;
  background: ${(props: Props) => props.theme.colors.primary};
`;

export const Text = styled.Text`
  font-size: ${(props: Props) => (props.small ? '14px' : '16px')};
  font-weight: bold;
  color: ${(props: Props) => props.theme.colors.buttonText};
`;
