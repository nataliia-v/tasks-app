import { combineReducers } from "redux";

import tasks from "./tasks/reducer";
import auth from "./authorization/reducer"

const rootReducer = combineReducers({
  tasks,
  auth
});

export default rootReducer;
