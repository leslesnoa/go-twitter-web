import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from "lodash";
// import configRouting from "./configRouting";
import Home from "../page/Home";
import Error404 from "../page/Error404";

export default function Routing() {
  return (
    <Router>
      <Switch>
        {/* {map(configRouting, (route, index) => {
          <Route key={index} path={route.path} exact={route.exact}>
            <route.page />
          </Route>
        })} */}
        <Route exact path='/' component={Home} />
        <Route path='*' component={Error404} />
      </Switch>
    </Router>
  );
}