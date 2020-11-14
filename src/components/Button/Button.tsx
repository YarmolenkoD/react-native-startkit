import React from 'react'
import { Button, Text } from './ButtonElements';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

export default ({ children, ...rest }: Props) => {
  return (
    <Button {...rest}>
      <Text>{children}</Text>
    </Button>
  )
}
