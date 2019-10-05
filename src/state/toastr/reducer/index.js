const initialState = {
  open: false,
  type: 'success',
  message: '',
};

const toastrReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'OPEN_TOASTR':
      return {
        ...state,
        open: true,
        type: action.payload.type,
        message: action.payload.message,
      };
    case "CLOSE_TOASTR":
      return {
        ...state,
        open: false,
        message: '',
      };
    default:
      return state;
  }

};

export default toastrReducer;