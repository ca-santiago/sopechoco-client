import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

/*
 * Components
 */
import SignUpForm from '../components/auht/SignUpForm';
import BackButton from '../components/BackButton';

/*
 * Types
 */
import {AuthStackParamList} from '../types';
type Props = StackScreenProps<AuthStackParamList, 'SignUp'> & {};

/* ======================= COMPONENT  ====================== */

export function SignUpScreen(props: Props) {
  const {route} = props;
  return (
    <>
      <BackButton color="#222" />
      <SignUpForm email={route.params.email} />
    </>
  );
}
