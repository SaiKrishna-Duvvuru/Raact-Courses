import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./user-interface/AppRoot";
import "./index.scss";
import { BrowserRouter, Route } from 'react-router-dom';

// Css theme
import "../node_modules/bootstrap/scss/bootstrap.scss";

ReactDOM.render(
  <BrowserRouter>
    <Route component={AppRoot} />
  </BrowserRouter>,

  document.getElementById("root")
);
