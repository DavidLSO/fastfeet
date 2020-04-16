import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import problems from './problems/reducer';
import deliverie from './deliverie/reducer';

export default combineReducers({
  auth,
  user,
  problems,
  deliverie,
});
