import styled from 'styled-components/native';
import { Theme } from '../../themes';
import { ActivityIndicatorProps } from 'react-native';

type Size = undefined | number |'small' | 'large';

interface Props {
  theme: Theme;
  size: Size;
}

export const Wrapper = styled.View`
  justify-content: 'center';
  align-items: 'center';
  background-color: rgba(255,255,255, 0.5);
`;

export const Loader = styled.ActivityIndicator`
  color: ${(props: Props) => (props.theme.colors.primary)};
  width: ${(props: Props) => getSize(props.size)};
  height: ${(props: Props) => getSize(props.size)};
`;

const getSize = (size: Size): string => {
  if (typeof size === 'number') {
    return `${size}px`
  } else if (size === 'large') {
    return '30px'
  } else {
    return '20px'
  }
}