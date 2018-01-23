import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";

const App = () =>
  <Router>
      <div>
        <About/>
      </div>
  </Router>;

export default App;
