import { combineReducers } from "redux";

import tasks from "./tasks/reducer";
import authentication from "./authentication/reducer"

const rootReducer = combineReducers({
  tasks,
  authentication
});

export default rootReducer;
