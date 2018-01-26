import React, { Component } from "react";

import "./About.css";
import Slide0 from "./Slide0";
import Slide10 from "./Slide10";
import Slide11 from "./Slide11";
import Slide20 from "./Slide20";
import Slide21 from "./Slide21";
import Slide30 from "./Slide30";
import Slide31 from "./Slide31";

class About extends Component {
   
    render() {

         switch (this.props.slide) {
            case 0:
                return (
                    <Slide0/>
                    );
            case 10:
                return (
                <Slide10/>
                );
            case 11:
                return (
                <Slide11/>
                );
            case 20:
                return (
                    <Slide20/>
                    );
            case 21:
                return (
                    <Slide21/>
                    );
            case 30:
                return (
                    <Slide30/>
                    );
            case 31:
                return (
                    <Slide31/>
                    );
            default: return (
                    <Slide0/>
                );
        }
    }
}
export default About;
