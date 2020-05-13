import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
