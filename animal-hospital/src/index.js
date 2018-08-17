import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
