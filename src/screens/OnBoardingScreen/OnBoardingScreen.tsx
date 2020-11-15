import React, { RefObject, useRef, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Swiper from 'react-native-swiper'

// react native components
import { View, Animated } from 'react-native';

// elements
import { AbsoluteView } from '../../elements';

// components
import FirstScreen from './FirstScreen/FirstScreen';
import LoginScreen from './LoginScreen/LoginScreen';

// styles
import { styles } from './OnBoardingStyles'

// types
import { RootStackParamList } from '../../../types';

const INDEX_BY_SCREEN_NAME: any = {
  firstScreen: -1,
  login: 1,
}

const { Value, timing } = Animated

export default function OnBoardingScreen({ navigation }: StackScreenProps<RootStackParamList, 'OnBoarding'>) {
  const [scrolledOffset] = useState(new Value(0))
  const swiperRef: RefObject<any> = useRef()

  const next = (): void => {
    navigation.navigate('Root');
  };

  const onScreenChanged = (index: number) => {
    console.log(111111, index)
    timing(
      scrolledOffset,
      {
        toValue: index,
        duration: 300,
        useNativeDriver: false,
      }
    ).start()
  }

  const scrollTo = (screen: string): void => {
    const nextIndex: number = INDEX_BY_SCREEN_NAME[screen]
    swiperRef.current.scrollBy(nextIndex, true)
  }

  const renderBackgroundImages = () => {
    const animateOpacity = scrolledOffset.interpolate({
      inputRange: [0,1],
      outputRange: [0,1],
    })

    console.log(111111, scrolledOffset)

    // const animateOpacity1 = scrolledOffset.interpolate({
    //   inputRange: [375,750],
    //   outputRange: [0,1],
    // })

    return (
      <View>
        <Animated.Image
          source={require('../../../assets/images/screens/on-boarding/first-bg.jpg')}
          style={[styles.backgroundContainer, { opacity: 1 }]}
        />
        <Animated.Image
          source={require('../../../assets/images/screens/on-boarding/login-bg.jpg')}
          style={[styles.backgroundContainer, { opacity: animateOpacity }]}
        />
      </View>
    )
  }

  return (
    <View>
      {renderBackgroundImages()}
      <AbsoluteView>
        <Swiper
          ref={swiperRef}
          showsPagination={false}
          scrollEnabled={false}
          loop={false}
          onIndexChanged={onScreenChanged}
        >
          <FirstScreen scrollTo={scrollTo} navigation={navigation} />
          <LoginScreen scrollTo={scrollTo} navigation={navigation} />
        </Swiper>
      </AbsoluteView>
    </View>
  );
}
