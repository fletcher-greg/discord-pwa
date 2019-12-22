import React, { useState, useMemo } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
//  LOCAL IMPORTS
import SideBar from "./components/nav/sidebar";
import Login from "./pages/login";
import About from "./pages/about";
import Contact from "./pages/contact";
import Activity from "./pages/activity";
import Library from "./pages/library";
import Memo from "./components/memo";
// user context
import { UserContext } from "./util/UserContext";
function App() {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <Router>
        <SideBar />
        <SideBar />
        <UserContext.Provider value={providerUser}>
          <Switch>
            <Route exact path="/">
              <h1>home</h1>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/memo">
              <Memo />
            </Route>
            <Route path="/activity">
              <Activity />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
