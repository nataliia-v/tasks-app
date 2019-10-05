import { combineReducers } from "redux";

import tasks from "./tasks/reducer";
import auth from "./authorization/reducer"
import toastr from './toastr/reducer';

const rootReducer = combineReducers({
  tasks,
  auth,
  toastr,
});

export default rootReducer;
