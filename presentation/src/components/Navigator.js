import React from "react";
import { Link } from "react-router-dom";

const Navigator = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/Present1"}>
      <Link to="/Present1">Present1</Link>
    </li>
    <li className={window.location.pathname === "/Present2"}>
      <Link to="/Present2">Present2</Link>
    </li>
    <li className={window.location.pathname === "/Present3"}>
      <Link to="/Present3">Present3</Link>
    </li>
  </ul>;

export default Navigator;