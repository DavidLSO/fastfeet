import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import { getSuccess, deleteSuccess } from "./actions";
import api from "~/services/api";

export function* getProblem() {
  try {
    const response = yield call(api.get, "delivery/problems");

    yield put(getSuccess(response.data));
  } catch (err) {
    toast.error("Falha ao tentar recuperar os problemas!");
  }
}

export function* deleteProblem({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `problem/${id}/cancel-delivery`);

    const response = yield call(api.get, `delivery/problems`);
    toast.success("Entrega cancelada com sucesso!");
    yield put(deleteSuccess(response.data));
  } catch (err) {
    toast.error(
      "Falha ao deletar o entregador, verifique se o mesmo não esta com entregas!"
    );
  }
}

export default all([
  takeLatest("@problem/GET_REQUEST", getProblem),
  takeLatest("@problem/DELETE_REQUEST", deleteProblem),
]);
