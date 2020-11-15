import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'

// elements
import {
  Title,
  Text,
  ScreenView,
} from '../../../elements';
import { FormContainer } from './LoginScreenElements';

// components
import Button from '../../../components/Button/Button';
import BackButton from '../../../components/BackButton/BackButton';
import Input from '../../../components/Input/Input';

// types
import { RootStackParamList } from '../../../../types';
import { StackNavigationProp } from '@react-navigation/stack/src/types';
import { useState } from 'react';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'OnBoarding'>;
  scrollTo: (screen: string) => void;
}

export default function LoginScreen({ navigation, scrollTo }: Props) {
  const [loginData, setLogin] = useState({
    email: '',
    password: '',
  })

  const next = () => {
    navigation.navigate('Root');
  };

  const onLogin = (values: object) => {
    console.log(11111, values)
  }

  const goBack = () => {
    scrollTo('firstScreen')
  }

  return (
    <ScreenView justifyContent={'center'}>
      <BackButton onPress={goBack} />
      <Title light>Login</Title>
      <Text light margin>Enjoy the Bible everywhere.</Text>
      <Formik
        validationSchema={
          yup.object().shape({
            email: yup
              .string()
              .email('Not a valid email')
              .required(),
            password: yup
              .string()
              .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
              .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
              .matches(/\d/, 'Password must have a number')
              .min(8, ({ min }) => `Password must be at least ${min} characters`)
              .required(),
          })}
        initialValues={{ email: '', password: '' }}
        values={loginData}
        onSubmit={onLogin}
        validateOnMount
      >
        {({
            handleChange,
            handleBlur,
            handleSubmit,
            values ,
            errors
        }) => (
          <FormContainer>
            <Input
              errorMessage={errors.email}
              placeholder='Email'
              leftIcon={{ type: 'font-awesome', name: 'envelope-open' }}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Input
              errorMessage={errors.password}
              placeholder='Password'
              leftIcon={{ type: 'font-awesome', name: 'lock', size: 25 }}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              marginBottom={20}
              secureTextEntry
            />
            <Button onPress={handleSubmit}>
              Login
            </Button>
          </FormContainer>
        )}
      </Formik>
    </ScreenView>
  );
}
