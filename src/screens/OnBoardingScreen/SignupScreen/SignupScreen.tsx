import * as React from 'react';

// elements
import {
  Title,
  Text,
  ScreenView,
} from '../../../elements';

// components
import Button from '../../../components/Button/Button';

// types
import { RootStackParamList } from '../../../../types';
import { StackNavigationProp } from '@react-navigation/stack/src/types';
import BackButton from '../../../components/BackButton/BackButton';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'OnBoarding'>;
  scrollTo: (screen: string) => void;
}

export default function SignupScreen({ navigation, scrollTo }: Props) {
  const next = () => {
    navigation.navigate('Root');
  };

  const goBack = () => {
    scrollTo('firstScreen')
  }

  return (
    <ScreenView justifyContent={'center'}>
      <BackButton onPress={goBack} />
      <Title>Sign Up</Title>
      <Text>Enjoy the Bible everywhere.</Text>
      <Button onPress={next}>
        Sign up
      </Button>
    </ScreenView>
  );
}
