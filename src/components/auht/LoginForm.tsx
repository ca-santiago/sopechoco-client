import React, {Dispatch, memo, useState} from 'react';
import {Text, TouchableNativeFeedback} from 'react-native';

/*
 * Hooks
 */
import {Controller, FieldValues, useForm} from 'react-hook-form';

/*
 * Components
 */
import Ionicon from 'react-native-vector-icons/Ionicons';

/*
 * Styles
 */
import {SForm} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
const {
  TextInput,
  FormContainer,
  RegisterText,
  InputGroup,
  InputContainer,
  LoginText,
  FormTitle,
} = SForm;

/*
 * Actions
 */
import {AuthActions} from '../../actions/Auth';

/*
 * Types
 */
import {AuthReducerAction, AuthStackParamList} from '../../types';
import {useNavigation} from '@react-navigation/core';

/* ======================= COMPONENT  ====================== */

function LoginForm() {
  // Hooks
  const {navigate} = useNavigation<
    StackNavigationProp<AuthStackParamList, 'Login'>
  >();
  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  /*
   * Local State
   */
  const [loading, setLoading] = useState<boolean>(false);

  /*
   * Form logic
   */
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm<FieldValues, {email: {}; password: {}}>();

  function OnSubmit(data: any) {
    if (loading) {
      return;
    }
    setLoading(true);
    AuthActions.Login({email: data.email, password: data.password})(
      authDispacher,
    ).finally(() => {
      setLoading(false);
    });
    // Clear this timeout // We have got a memory leak
    // reset();
  }

  function navigateRegister() {
    const vals = getValues();
    navigate('SignUp', {email: vals.email});
  }

  return (
    <FormContainer>
      <FormTitle>Listos para comer?</FormTitle>
      <InputContainer>
        <InputGroup>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                placeholder="Email"
                defaultValue=""
                autoCompleteType="email"
                autoCapitalize="none"
                textContentType="emailAddress"
              />
            )}
            rules={{required: true}}
            name="email"
          />
          {errors.email && <Text>This is required.</Text>}
        </InputGroup>
        <InputGroup>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                placeholder="Contraseña"
                defaultValue=""
                secureTextEntry
                autoCompleteType="password"
                textContentType="password"
                autoCapitalize="none"
              />
            )}
            rules={{required: true}}
            name="password"
          />
          {errors.password && <Text>This is required.</Text>}
        </InputGroup>
        <InputGroup>
          <TouchableNativeFeedback>
            <LoginText onPress={handleSubmit(OnSubmit)}>
              {loading ? (
                <Ionicon size={20} name="lock-closed" color="white" />
              ) : (
                'Entrar'
              )}
            </LoginText>
          </TouchableNativeFeedback>
          <RegisterText onPress={navigateRegister}>
            No tienes cuenta aún?
          </RegisterText>
        </InputGroup>
      </InputContainer>
    </FormContainer>
  );
}

export default memo(LoginForm);
