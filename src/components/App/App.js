import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Toastr from "../../components/Toastr";
import Main from "../../views/Main";
import { getToastrConfig } from "../../state/toastr/selectors";
import { authenticate } from "../../state/authorization/thunks";

const App = ({ toastrConfig, dispatch }) => {
  useEffect(() => {
    dispatch(authenticate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className="App">
        <Main/>
        <Toastr { ...toastrConfig } />
      </div>
  );
};

const mapStateToProps = state => ({
  toastrConfig: getToastrConfig(state),
});

export default connect(mapStateToProps)(App);