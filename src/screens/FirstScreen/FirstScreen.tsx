import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList } from '../../../types';

import Button from '../../components/Button/Button';
import { Title, Text, ViewWrapper } from '../../elements';

export default function NotFoundScreen(
  { navigation }: StackScreenProps<RootStackParamList, 'NotFound'>
) {

  const next = () => {
    navigation.navigate('Root');
  }

  return (
    <ViewWrapper>
      <Title>First Screen</Title>
      <Text>Some message about this screen</Text>
      <Button onPress={next}>
        Go to tabs
      </Button>
    </ViewWrapper>
  );
}
