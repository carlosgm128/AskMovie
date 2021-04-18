import React, { Component } from "react";
import "bulma/css/bulma.css";
import { Home } from "./Pages/Home";
import { Details } from "./Pages/Details";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Details} />
        </Switch>
      </div>
    );
  }
}
export default App;