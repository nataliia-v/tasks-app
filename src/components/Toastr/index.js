import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { bindActionCreators } from "redux";

import { toastrActions } from "../../state/toastr/actions";

const Toastr = ({ open, autoHideDuration, message, actions }) => {
  const handleClose = () => {
    actions.closeToastr();
  };

  return (
      <Snackbar
          anchorOrigin={ {
            vertical: 'top',
            horizontal: 'right',
          } }
          open={ open }
          autoHideDuration={ autoHideDuration }
          onClose={handleClose}
      >
        <SnackbarContent message={ message }/>
      </Snackbar>
  );
};

Toastr.defaultProps = {
  autoHideDuration: 6000,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(toastrActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Toastr);