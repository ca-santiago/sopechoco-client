import {API_URL} from '../constants';

export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginReturnType {
  accessToken: string;
  userId: string;
}

export interface SignUpProps {
  email: string;
  password: string;
  name: string;
}

export interface GetProfileInfoProps {
  token: string;
}

export type SignUpReturnType = null;

const baseUrl = `${API_URL}/auth`;

async function SignUp({email, password, name}: SignUpProps) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  };
  return await fetch(`${API_URL}/users`, options);
}

async function Login({email, password}: LoginProps): Promise<Response> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };
  return await fetch(`${baseUrl}/login`, options);
}

async function GetProfileInfo({token}: GetProfileInfoProps) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return await fetch(`${baseUrl}/profile`, options);
}

export const AuthService = {
  SignUp,
  Login,
  GetProfileInfo,
};
