import * as React from 'react';
import { Input, InputProps } from 'react-native-elements';
import { useTheme } from 'styled-components';
import { View } from 'react-native';

interface Props extends InputProps {
  leftIcon?: {
    type: string,
    name: string,
    color?: string,
    size?: number
  },
  marginBottom?: number,
}

const defaultProps: Props = {
  marginBottom: 0
}

export default ({ leftIcon, marginBottom, onChangeText, ...props }: Props = defaultProps) => {
  const theme = useTheme()

  return (
    <View style={{ marginBottom }}>
      <Input
        onChangeText={onChangeText}
        errorStyle={{ color: theme.colors.error }}
        inputStyle={{ color: '#fff' }}
        inputContainerStyle={{ borderColor: '#fff' }}
        leftIcon={{ color: '#fff', size: 20, ...leftIcon }}
        leftIconContainerStyle={{ marginRight: 10 }}
        placeholderTextColor={'#b7b5b5'}
        {...props}
      />
    </View>
  )
}