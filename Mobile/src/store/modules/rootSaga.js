import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/saga';
import problems from './problems/saga';
import deliverie from './deliverie/saga';

export default function* rootSaga() {
  return yield all([auth, user, problems, deliverie]);
}
