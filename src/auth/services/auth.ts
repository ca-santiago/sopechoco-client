import {AuthContants} from '../constants';

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

export type SignUpReturnType = null;

async function SignUp({email, password, name}: SignUpProps) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    };
    const res = await fetch(`${AuthContants.AUTH_API}/auth/`, options);

    if (res.status === 201) {
      return res.json();
    }

    throw new Error(res.status.toString());
  } catch (err) {
    return null;
  }
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
  return await fetch(`${AuthContants.AUTH_API}/auth/login`, options);
}

export const AuthService = {
  SignUp,
  Login,
};