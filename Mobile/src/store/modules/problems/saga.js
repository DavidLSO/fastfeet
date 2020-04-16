import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {getSuccess, createSuccess, deleteSuccess} from './actions';
import api from '~/services/api';

export function* getProblem({payload}) {
  try {
    const {id} = payload;
    const response = yield call(api.get, `delivery/${id}/problems`);

    yield put(getSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na requisição!',
      'Falha ao tentar recuperar os problemas !',
    );
  }
}

export function* createProblem({payload}) {
  try {
    const {delivery_id, description} = payload;
    const response = yield call(api.post, `delivery/${delivery_id}/problems`, {
      delivery_id,
      description,
    });
    console.tron.error(response.data);
    Alert.alert('Sucesso!', 'Problema criado com sucesso !');
    yield put(createSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na requisição!',
      'Falha ao tentar criar um problema !' + err,
    );
  }
}

export function* deleteProblem({payload}) {
  try {
    const {id} = payload;

    yield call(api.delete, `problem/${id}/cancel-delivery`);

    const response = yield call(api.get, `delivery/problems`);

    Alert.alert('Sucesso!', 'Entrega cancelada com sucesso !');
    yield put(deleteSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na requisição!',
      'Falha ao deletar o entregador, verifique se o mesmo não esta com entregas !',
    );
  }
}

export default all([
  takeLatest('@problem/GET_REQUEST', getProblem),
  takeLatest('@problem/CREATE_REQUEST', createProblem),
  takeLatest('@problem/DELETE_REQUEST', deleteProblem),
]);
