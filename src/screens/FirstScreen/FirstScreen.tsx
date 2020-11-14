import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList } from '../../../types';

import Button from '../../components/Button/Button';
import { Title, Text, ViewWrapper, ViewCenterWrapper } from '../../elements';

export default function FirstScreen({ navigation }: StackScreenProps<RootStackParamList, 'FirstScreen'>) {

  const next = () => {
    navigation.navigate('Root');
  };

  return (
    <ViewCenterWrapper>
      <Title>First Screen</Title>
      <Text margin>Some message about this screen</Text>
      <Button onPress={next}>
        Go to tabs
      </Button>
    </ViewCenterWrapper>
  );
}
