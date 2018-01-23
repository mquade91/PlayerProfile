import React, { Component } from "react";

import "./Present.css";

class Present1 extends Component {

    render() {
            return (
                <div>
                    <div className="heading">
                        <h1>Technology Used</h1>
                    </div>
                    <div className="techlist">
                        <ul>
                            <li id="one">HTML5</li>
                            <li id="two">CSS3</li>
                            <li id="three">Bootstrap</li>
                            <li id="four">CSS Grids (new)</li>
                            <li id="five">Password (new)</li>
                            <li id="six">MongoDB/Mongoose</li>
                            <li id="seven">REACT</li>
                        </ul>
                    </div>
                </div>
        );
}
}
export default Present1;