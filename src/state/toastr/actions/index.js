export const toastrActions = {
  openToastr: ({ message, type }) => ({
    type: 'OPEN_TOASTR',
    payload: {
      message,
      type,
    },
  }),
  closeToastr: () => ({
    type: 'CLOSE_TOASTR',
  }),
};

