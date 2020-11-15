import React, { RefObject } from 'react';

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
import TextButton from '../../../components/TextButton/TextButton';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'OnBoarding'>;
  scrollTo: (screen: string) => void;
}

export default function FirstScreen({ navigation, scrollTo }: Props) {

  const goToTabs = (): void => {
    navigation.navigate('Root')
  }

  const next = (): void => {
    scrollTo('login')
  };

  return (
    <ScreenView flexEnd>
      <Text light margin>Enjoy the Bible everywhere.</Text>
      <Button onPress={next}>
        Have account? Login
      </Button>
      <Button light onPress={next}>
        Join us, its free
      </Button>
      <TextButton onPress={goToTabs} title={'Do this later'} />
    </ScreenView>
  );
}
