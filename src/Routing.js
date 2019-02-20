import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

// import Resume from "./components/Resume";
import About from './pages/About';


const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />

      <Route path="/about" component={About} />

    </Switch>
  </Router>
);

export default Routing;