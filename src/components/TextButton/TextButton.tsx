import React from 'react';

// react native components
import { TouchableOpacity } from 'react-native';

// elements
import { Text } from '../../elements'
import { ACTIVE_BUTTON_OPACITY } from '../../constants/Common';

interface Props {
  onPress: () => void;
  title?: string;
}

export default ({ title, onPress, ...rest }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={ACTIVE_BUTTON_OPACITY} {...rest}>
      <Text light>{title}</Text>
    </TouchableOpacity>
  );
}
