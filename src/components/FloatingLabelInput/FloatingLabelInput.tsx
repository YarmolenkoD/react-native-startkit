import React, { Component, ReactNode, RefObject, useEffect, useRef, useState } from 'react';

// elements
import {
  View,
  TextInput,
  Animated,
  TextInputProps
} from 'react-native';

// styles
import styles from './InputStyles';

interface Props extends TextInputProps {
  value: string,
  label: string,
  focusedLabelColor?: string,
  unFocusedLabelColor?: string,
  rightButton?: ReactNode,
};

const defaultProps: Props = {
  label: '',
  value: '',
  rightButton: null,
  focusedLabelColor: '#fff',
  unFocusedLabelColor: '#e3e3e3'
};

const { Value, timing, parallel } = Animated;

export default (props: Props = defaultProps) => {
  const {
    label,
    value,
    rightButton,
    focusedLabelColor,
    unFocusedLabelColor
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [top] = useState(new Value(18));
  const [fontSize] = useState(new Value(20));
  const ref: RefObject<any> = useRef();

  useEffect(() => {
    toggleLabel(isFocused);
  }, [isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value.length <= 0) {
      setIsFocused(false);
    }
  };

  const toggleLabel = (isFocused: boolean = false, duration: number = 200) => {
    if (!value.length || isFocused) {
      animation(isFocused, duration);
    }
  };

  const animation = (isFocused: boolean = false, duration: number = 200): void => {
    parallel([
      timing(
        top,
        {
          toValue: !isFocused ? 18 : 0,
          duration,
          useNativeDriver: false
        }
      ),
      timing(
        fontSize,
        {
          toValue: !isFocused ? 20 : 14,
          duration,
          useNativeDriver: false
        }
      )
    ]).start();
  };

  const getInnerRef = (): RefObject<any> => ref;

  const blur = (): void => {
    ref.current.blur();
    setIsFocused(false);
    animation(false, 0);
  };

  return (
    <View style={{ paddingTop: 18 }}>
      <Animated.Text style={[
        { color: isFocused || value.length ? focusedLabelColor : unFocusedLabelColor },
        styles.labelStyle,
        { top, fontSize }
      ]}>
        {label}
      </Animated.Text>
      <View>
        <TextInput
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          blurOnSubmit
        />
        {rightButton}
      </View>
    </View>
  );
}
