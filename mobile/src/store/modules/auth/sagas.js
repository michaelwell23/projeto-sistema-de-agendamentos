import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as authActions from './actions';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'O usuário não pode ser prestador de serviços.'
      );
      yield put(authActions.signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(authActions.signInSuccess(token, user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(authActions.signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, navigation } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    yield put(authActions.signUpSuccess());
    navigation.navigate('SignIn');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );
    console.tron.error(err);
    yield put(authActions.signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  delete api.defaults.headers.Authorization;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
