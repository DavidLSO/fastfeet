import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {signInSuccess, signFailure} from './actions';

import api from '~/services/api';

export function* signIn({payload}) {
  try {
    const {id} = payload;
    if (id) {
      const response = yield call(api.get, `deliveryman?id=${id}`);
      const user = response.data[0];

      yield put(signInSuccess(user));
    } else {
      throw 'Id não informado';
    }
  } catch (err) {
    Alert.alert('Erro no Login', 'Verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
