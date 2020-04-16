import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/saga";
import deliverie from "./deliverie/saga";
import deliveryman from "./deliveryman/saga";
import recipient from "./recipient/saga";
import problems from "./problems/saga";

export default function* rootSaga() {
  return yield all([auth, user, deliverie, deliveryman, recipient, problems]);
}
