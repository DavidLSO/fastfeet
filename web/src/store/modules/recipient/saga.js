import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import { getSuccess, updateSuccess, createSuccess } from "./actions";
import api from "~/services/api";

export function* getRecipient() {
  try {
    const response = yield call(api.get, "recipients");

    yield put(getSuccess(response.data));
  } catch (err) {
    toast.error("Falha ao tentar recuperar os destinatários!");
  }
}

export function* createRecipient({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, "recipients", data);
    toast.success("Destinatário criada com sucesso!");
    yield put(createSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao criar um destinatário!");
  }
}

export function* updateRecipient({ payload }) {
  try {
    const { data, id } = payload;

    const response = yield call(api.put, `recipients/${id}`, data);
    toast.success("Destinatário atualizado com sucesso!");
    yield put(updateSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao atualizar um destinatário!");
  }
}

export default all([
  takeLatest("@recipient/GET_REQUEST", getRecipient),
  takeLatest("@recipient/CREATE_REQUEST", createRecipient),
  takeLatest("@recipient/UPDATE_REQUEST", updateRecipient),
]);
