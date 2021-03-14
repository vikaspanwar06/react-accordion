import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Home from './pages/Home';
import About from './pages/About';
import Company from "./pages/Company";
import './main.sass';

class App extends Component {
  render() {
    return (
      <>
        <SideMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/company/" component={Company} />
        </Switch>
      </>
    );
  }
}

export default App;
