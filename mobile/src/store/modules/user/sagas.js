import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import * as userActions from './actions';
import api from '~/services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    yield put(userActions.updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Erro na atualização',
      'Houve um erro na atualização, verifique seus dados!'
    );
    yield put(userActions.updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
