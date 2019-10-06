/*
* Fetch login
* */
export const startUserLogin = () => ({
  type: 'START_USER_LOGIN_FETCHING',
});

export const stopUserLogin = () => ({
  type: 'STOP_USER_LOGIN_FETCHING',
});

export const userLoginSuccess = userObj => ({
  type: 'USER_LOGIN_SUCCESS',
  payload: userObj
});

export const userLoginFailed = error => ({
  type: 'USER_LOGIN_FAILED',
  payload: error
});

export const userLogout = () => ({
  type: 'USER_LOGOUT',
});
