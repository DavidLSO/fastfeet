import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  getSuccess,
  deleteSuccess,
  createSuccess,
  updateSuccess,
} from "./actions";
import api from "~/services/api";

export function* getDeliveries() {
  try {
    const response = yield call(api.get, "deliveries");

    yield put(getSuccess(response.data));
  } catch (err) {
    toast.error("Falha ao tentar recuperar as encomendas!");
  }
}

export function* createDeliveries({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, "deliveries", data);

    toast.success("Encomenda criada com sucesso!");
    yield put(createSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao criar uma encomenda!");
  }
}

export function* updateDeliveries({ payload }) {
  try {
    const { data, id } = payload;

    const response = yield call(api.put, `deliveries/${id}`, data);
    toast.success("Encomenda atualizada com sucesso!");
    yield put(updateSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao atualizar uma encomenda!");
  }
}

export function* deleteDeliveries({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliveries/${id}`);

    const response = yield call(api.get, "deliveries");

    yield put(deleteSuccess(response.data));
  } catch (err) {
    toast.error("Falha ao deletar a encomenda!");
  }
}

export default all([
  takeLatest("@deliverie/GET_REQUEST", getDeliveries),
  takeLatest("@deliverie/CREATE_REQUEST", createDeliveries),
  takeLatest("@deliverie/UPDATE_REQUEST", updateDeliveries),
  takeLatest("@deliverie/DELETE_REQUEST", deleteDeliveries),
]);
