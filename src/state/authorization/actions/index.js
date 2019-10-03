/*
* Fetch login
* */
export const startUserLoginFetching = () => ({
  type: 'START_USER_LOGIN_FETCHING',
});

export const stopUserLoginFetching = () => ({
  type: 'STOP_USER_LOGIN_FETCHING',
});

export const fetchUserLoginSuccess = userObj => ({
  type: 'FETCH_USER_LOGIN_SUCCESS',
  payload: userObj
});

export const fetchUserLoginFailed = error => ({
  type: 'FETCH_USER_LOGIN_FAILED',
  payload: error
});