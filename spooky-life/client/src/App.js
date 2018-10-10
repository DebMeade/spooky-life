import React, {Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HauntedHouses from "./pages/HauntedHouses";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
// this is single page application
const App = () => (
  <Router>
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={HauntedHouses} />
        <Route exact path="/hauntedhouses" component={HauntedHouses} />
        {/* <Route exact path="/books/:id" component={Detail} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Fragment>
  </Router>
);

export default App;
