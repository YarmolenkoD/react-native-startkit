import React from 'react';
import { Asset } from 'expo-asset';

import { Button, Image } from './BackButtonElements';
import { ACTIVE_BUTTON_OPACITY } from '../../constants/Common';

interface Props {
  onPress: () => void;
}

export default ({ ...rest }: Props) => {
  const icon = Asset.fromModule(require('../../../assets/images/icons/common/back-icon.png')).uri;

  return (
    <Button activeOpacity={0.4} {...rest}>
      <Image resizeMethod='resize' resizeMode='cover' source={{ uri: icon }} />
    </Button>
  );
}
