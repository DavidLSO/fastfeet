import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import deliverie from "./deliverie/reducer";
import deliveryman from "./deliveryman/reducer";
import recipient from "./recipient/reducer";
import problems from "./problems/reducer";

export default combineReducers({
  auth,
  user,
  deliverie,
  deliveryman,
  recipient,
  problems,
});
