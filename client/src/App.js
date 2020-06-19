import React from "react";
import "../src/Components/Style/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/navBar";
import TamingCalc from "./Components/Pages/tamingCalc";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/tamingcalc' component={TamingCalc} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
