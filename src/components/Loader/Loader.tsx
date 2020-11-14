import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { Wrapper, Loader } from './LoaderElements';

interface Props {
  show: boolean;
  size?: number | 'small' | 'large';
}

export default ({ show, size }: Props) => {
  return (
    <Modal transparent visible={show}>
      <Wrapper>
        <Loader size={size} />
      </Wrapper>
    </Modal>
  );
}
