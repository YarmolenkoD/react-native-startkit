import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';
import Layout from '../constants/Layout';

interface Props {
  theme: DefaultTheme
}

interface ScreenViewProps extends Props {
  flexEnd?: boolean;
  justifyContent?: string;
}

export const ScreenView = styled.View`
  flex: 1;
  align-items: center;
  padding: ${(props: ScreenViewProps) => `${props.theme.paddingVertical}px ${props.theme.paddingHorizontal}px`};
  justify-content: ${({ flexEnd, justifyContent }: ScreenViewProps) => {
    if (justifyContent) {
      return justifyContent
    }
    return flexEnd ? 'flex-end' : 'flex-start'
  }};
`;

export const ViewWrapper = styled.View`
  flex: 1;
  padding: ${(props: Props) => `${props.theme.paddingVertical}px ${props.theme.paddingHorizontal}px`};
`;

export const AbsoluteView = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${Layout.window.width};
  height: ${Layout.window.height};
`;
