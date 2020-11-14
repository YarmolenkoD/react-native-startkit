import React from 'react'
import { Button, Text } from './ButtonElements';
import { ACTIVE_BUTTON_OPACITY } from '../../constants/Common';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

export default ({ children, ...rest }: Props) => {
  return (
    <Button activeOpacity={ACTIVE_BUTTON_OPACITY} {...rest}>
      <Text>{children}</Text>
    </Button>
  )
}
