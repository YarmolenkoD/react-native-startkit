import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Button, Text } from './ButtonElements';
import { ACTIVE_BUTTON_OPACITY } from '../../constants/Common';
import { useTheme } from 'styled-components';
import { StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  light?: boolean;
}

export default ({ children, light, onPress, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <Button onPress={onPress} activeOpacity={ACTIVE_BUTTON_OPACITY} {...rest}>
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        style={styles.gradient}
        colors={light ? ['#ffffff', '#ffffff'] : theme.linearGradient}
      >
        <Text dark={light}>{children}</Text>
      </LinearGradient>
    </Button>
  );
}

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10
  }
});
