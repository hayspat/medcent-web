import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  whoAmI: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  role: Scalars['Int'];
  permissions: Scalars['Int'];
  password: Scalars['String'];
  profile: Profile;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  tcNo?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  homeAddress?: Maybe<Scalars['String']>;
  passportNo?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  canSendSms?: Maybe<Scalars['Boolean']>;
  canSendEmail?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};


export enum Gender {
  Male = 'male',
  Female = 'female'
}

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  signUp: User;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationSignUpArgs = {
  signupInput: SignupInput;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  ) }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    accessToken
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};