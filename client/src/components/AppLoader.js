import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppLoader from "./components/AppLoader";
import About from "./components/pages/About";
import Present1 from "./components/Present1";
import Present2 from "./components/Present2";
import Present3 from "./components/Present3";

const App = () =>
  <Router>
    <div>
      <AppLoader />
      <Route exact path="/about" component={About} />
      <Route exact path="/present1" component={Home} />
      <Route exact path="/present2" component={Blog} />
      <Route exact path="/present3" component={Contact} />
    </div>
  </Router>;

export default App;