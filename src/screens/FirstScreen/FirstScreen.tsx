import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList } from '../../../types';

import { Title, Text, ViewWrapper, Button, ButtonText } from '../../elements';

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
      <Button>
        <ButtonText>
          Go to tabs
        </ButtonText>
      </Button>
    </ViewWrapper>
  );
}
