import tasksService from "../../../services/tasks-service";

import * as actions from '../actions';


export const userAuthe = ({username, password}) => {

  return async dispatch => {
    dispatch(actions.startUserLoginFetching());

    try {
      const data = await tasksService.userAuth(username, password);
      dispatch(actions.fetchUserLoginSuccess(data));
    } catch (error) {
      dispatch(actions.fetchUserLoginFailed(error));
    } finally {
      dispatch(actions.stopUserLoginFetching());
      // console.log("created success")
    }
  };
};