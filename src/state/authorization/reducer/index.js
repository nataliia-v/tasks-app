const initialState = {
  currentUser: {},
  loading: false,
  isSaving: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case 'START_USER_LOGIN_FETCHING':
      return {
        ...state,
        isSaving: true
      };
    case 'STOP_USER_LOGIN_FETCHING':
      return {
        ...state,
        isSaving: false
      };
    case 'FETCH_USER_LOGIN_SUCCESS':
      return {
        ...state,
        currentUser: [...state.currentUser, action.currentUser ]
      };

    default:
      return state;
  }

}