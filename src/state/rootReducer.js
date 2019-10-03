import { combineReducers } from "redux";

import tasks from "./tasks/reducer";
import autho from "./authorization/reducer"

const rootReducer = combineReducers({
  tasks,
  autho
});

export default rootReducer;
