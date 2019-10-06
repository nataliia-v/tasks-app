import authService from "../../../services/AuthService";
import history from '../../../utils/history';

import * as actions from '../actions';
import { toastrActions } from "../../toastr/actions";
import { userLoginSuccess } from "../actions";
import { userLoginFailed } from "../actions";

export const login = ({ username, password }) => {

  return async dispatch => {
    dispatch(actions.startUserLogin());

    try {
      await authService.login({ username, password });

      dispatch(actions.userLoginSuccess());
      history.push('/');
    } catch (error) {
      dispatch(toastrActions.openToastr({ message: 'Bad credentials' }));
      dispatch(actions.userLoginFailed());
    } finally {
      dispatch(actions.stopUserLogin());
    }
  };
};

export const authenticate = () => {

  return async dispatch => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(userLoginSuccess());
    } else {
      dispatch(userLoginFailed());
    }

  }
};
