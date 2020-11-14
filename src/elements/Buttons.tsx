import styled from 'styled-components/native';
import { Theme } from '../themes';

interface Props {
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
