import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

export default () => {
  return createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunkMiddleware))
  );
};
