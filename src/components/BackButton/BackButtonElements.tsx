import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  top: 50px;
  width: 45px;
  height: 45px;
`;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
`;

