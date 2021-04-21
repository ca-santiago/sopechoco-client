import React, {Dispatch, memo, useEffect, useState} from 'react';
import {Text, TouchableNativeFeedback} from 'react-native';

/*
 * Hooks
 */
import {Controller, FieldValues, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

/*
 * Components
 */
import Ionicon from 'react-native-vector-icons/Ionicons';

/*
 * Styles
 */
import {SForm} from './styles';
const {
  TextInput,
  FormContainer,
  FormTitle,
  InputGroup,
  InputContainer,
  LoginText,
} = SForm;

/*
 * Actions
 */
import {AuthActions} from '../../actions/Auth';

/*
 * Types
 */
import {AuthReducerAction} from '../../types';
type Props = {
  email?: string;
};

/* ======================= COMPONENT  ====================== */

function SignUpForm(props: Props) {
  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  // LocalState
  const [loading, setLoading] = useState<boolean>(false);

  /*
   * Form logic
   */
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<FieldValues, {email: {}; password: {}; name: {}}>();

  useEffect(() => {
    setValue('email', props.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['once']);

  function OnSubmit(data: any) {
    if (loading) {
      return;
    }
    setLoading(true);
    AuthActions.SignUp(data)(authDispacher).finally(() =>
      setTimeout(() => setLoading(false), 500),
    );
  }

  return (
    <FormContainer>
      <FormTitle>Unirse ya!</FormTitle>
      <InputContainer>
        <InputGroup>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                placeholder="Nombre"
                defaultValue=""
                autoCompleteType="name"
                autoCapitalize="words"
                textContentType="name"
              />
            )}
            rules={{required: true}}
            name="name"
          />
          {errors.name && <Text>Requerido *</Text>}
        </InputGroup>
        <InputGroup>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                placeholder="Email"
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
        </InputGroup>
      </InputContainer>
    </FormContainer>
  );
}

export default memo(SignUpForm);
