const initialState = {
  data: [],
  loading: true,
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