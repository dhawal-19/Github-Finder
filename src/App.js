import "./App.css";
import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Alert } from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs } from "./components/pages/AboutUs";
import GithubState from "./context/github/GithubState";
import User from "./components/users/User";
import AlertState from "./context/alert/AlertState";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon="fab fa-github" title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
