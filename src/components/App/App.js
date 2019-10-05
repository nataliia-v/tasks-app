import React from 'react';
import { connect } from 'react-redux';

import Toastr from "components/Toastr";
import Main from "views/Main";
import { getToastrConfig } from "../../state/toastr/selectors";

function App({ toastrConfig }) {

  console.log('toastrConfig', toastrConfig);

  return (
      <div className="App">
        <Main />
        <Toastr {...toastrConfig} />
      </div>
  );
}

const mapStateToProps = state => ({
  toastrConfig: getToastrConfig(state),
});

export default connect(mapStateToProps)(App);