import React from "react";
import { Route } from "react-router";

export const mapRoutes = routes =>
    Object.values(routes)
        .filter(route => typeof route === "object")
        .map(({ path, component, exact }, index) => (
            <Route exact={exact} component={component} path={path} key={index} />
        ));
