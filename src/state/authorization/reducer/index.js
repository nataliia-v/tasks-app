const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case 'START_USER_LOGIN_FETCHING':
      return {
        ...state,
        loading: true
      };
    case 'STOP_USER_LOGIN_FETCHING':
      return {
        ...state,
        loading: false
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'USER_LOGIN_FAILED':
    case 'USER_LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }

}