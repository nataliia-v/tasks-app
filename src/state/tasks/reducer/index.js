const initialState = {
  data: {},
  loading: false,
  isSaving: false,
  error: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'START_TASKS_FETCHING':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'STOP_TASKS_FETCHING':
      return {
        ...state,
        loading: false,
      };
    case 'FETCH_TASKS_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'FETCH_TASKS_FAILED':
      return {
        ...state,
        error: action.payload
      };
      /*
     * Save task
     * */
    case 'START_TASK_SAVING':
      return {
        ...state,
        isSaving: true
      };
    case 'STOP_TASK_SAVING':
      return {
        ...state,
        isSaving: false
      };
    case 'SAVE_TASK_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload ]
      };
    case 'UPDATE_TASK_SUCCESS':
      return {
        ...state,
        data: state.data.map(post => post.id === action.payload.id ? ({
          ...post,
          ...action.payload
        }) : post)
      };


    default:
      return state
  }
};

export default reducer;


// export const userLoginFetch = user => {
//   return dispatch => {
//     return fetch("http://localhost:3000/api/v1/login", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify({user})
//     })
//         .then(resp => resp.json())
//         .then(data => {
//           if (data.message) {
//             // Here you should have logic to handle invalid login credentials.
//             // This assumes your Rails API will return a JSON object with a key of
//             // 'message' if there is an error
//           } else {
//             localStorage.setItem("token", data.jwt);
//             dispatch(loginUser(data.user))
//           }
//         })
//   }
// };