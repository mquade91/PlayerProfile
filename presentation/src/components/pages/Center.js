import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Center.css";
import Present1 from "./Present1";
import Present2 from "./Present2";
import Present3 from "./Present3";

const Center = () =>
  <Router>
    <div>
      <Center/>
      <Route exact path="/present1" component={Present1} />
      <Route exact path="/present2" component={Present2} />
      <Route exact path="/present3" component={Present3} />
    </div>
  </Router>;

export default Center;