import React, { Component } from "react";
import "./Jumbo.css";

const Jumbo = () => (
    <div class="jumbotron">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar">
          <a class="navbar-brand" href="/">SmartScout</a>
          <img src="../assets/images/logo.png" width="120" alt="Bootstrappin"/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Current Team
                      </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="http://www.panthers.com/team/roster.html">Current Roster</a>
                  <a class="dropdown-item" href="http://www.panthers.com/team/standings.html">2018 Standing</a>
                  <a class="dropdown-item" href="http://www.panthers.com/news/article-2/Panthers-2018-opponents-set/7d37a1a1-6a43-41ee-8785-203b702e5af4">2018 Schedule</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Current Coaching staff
                    </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="http://www.panthers.com/news/article-2/Panthers-2018-opponents-set/7d37a1a1-6a43-41ee-8785-203b702e5af4">2018 Schedule</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Upcoming Free Agents 
                    </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="http://www.panthers.com/news/article-2/Panthers-potential-free-agents-in-2018/5e5884b9-3ba3-4838-82ab-4e10903ae043">Teams' Free Agents </a>
                    <a class="dropdown-item" href="http://www.spotrac.com/nfl/free-agents/">2018 Free Agents Market  </a>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
    
export default Jumbo;