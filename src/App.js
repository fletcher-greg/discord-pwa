import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
