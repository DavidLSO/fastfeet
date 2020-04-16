import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  getSuccess,
  deleteSuccess,
  updateSuccess,
  createSuccess,
} from "./actions";
import api from "~/services/api";

export function* getDeliveryman() {
  try {
    const response = yield call(api.get, "deliveryman");

    yield put(getSuccess(response.data));
  } catch (err) {
    toast.error("Falha ao tentar recuperar os entregadores!");
  }
}

export function* createDeliveryman({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, "deliveryman", data);
    toast.success("Entregador criada com sucesso!");
    yield put(createSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao criar um entregador!");
  }
}

export function* updateDeliveryman({ payload }) {
  try {
    const { data, id } = payload;

    const response = yield call(api.put, `deliveryman/${id}`, data);
    toast.success("Entregador atualizado com sucesso!");
    yield put(updateSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao atualizar um entregador!");
  }
}

export function* deleteDeliveryman({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliveryman/${id}`);

    const response = yield call(api.get, "deliveryman");
    toast.success("Entregador deletado com sucesso!");
    yield put(deleteSuccess(response.data));
  } catch (err) {
    toast.error(
      "Falha ao deletar o entregador, verifique se o mesmo não esta com entregas!"
    );
  }
}

export default all([
  takeLatest("@deliveryman/GET_REQUEST", getDeliveryman),
  takeLatest("@deliveryman/CREATE_REQUEST", createDeliveryman),
  takeLatest("@deliveryman/UPDATE_REQUEST", updateDeliveryman),
  takeLatest("@deliveryman/DELETE_REQUEST", deleteDeliveryman),
]);
