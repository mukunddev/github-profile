import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./pages/Profile/Index";
import Header from "./components/Common/Header";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
