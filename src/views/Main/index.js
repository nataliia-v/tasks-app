import React from "react";
import { Switch, Redirect } from "react-router";

import Header from "../../components/Header";
import routes from "../routes";

function Main() {
  return (
      <div>
        <Header />
        <Switch>
          { routes }
          <Redirect from="" to="/"/>
          <Redirect from="/login" to="/"/>
        </Switch>
      </div>
  );
}

export default Main;